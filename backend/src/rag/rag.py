import os
from typing import TypedDict

import openai
from cleanlab_codex import Project
from codex.types.project_validate_response import DeterministicGuardrailsResults, EvalScores, ProjectValidateResponse

from src.rag.constants import (
    FALLBACK_ANSWER,
    MODEL,
    PROMPT_TEMPLATE,
    RETRIEVAL_RESULTS,
    SIMILARITY_SCORE_THRESHOLD,
)
from src.rag.knowledge_base import KnowledgeBase


class Eval(TypedDict):
    name: str
    score: float
    is_bad: bool


class Response(TypedDict):
    response: str
    original_response: str
    validation_result: ProjectValidateResponse


class RAG:
    def __init__(self, knowledge_base: KnowledgeBase) -> None:
        self._retriever = knowledge_base.as_retriever(similarity_top_k=RETRIEVAL_RESULTS)
        self._project = Project.from_access_key(os.environ["CLEANLAB_CODEX_ACCESS_KEY"])
        self._openai_client = openai.OpenAI()

    def _retrieve(self, question: str) -> list[str]:
        context_nodes = self._retriever.retrieve(question)
        return [
            node.text for node in context_nodes if node.score is not None and node.score >= SIMILARITY_SCORE_THRESHOLD
        ]

    def _format_contexts(self, contexts: list[str]) -> str:
        return "\n\n".join(f"Context Chunk {index}:\n{context}" for index, context in enumerate(contexts, 1))

    def _format_prompt(self, question: str, context: str) -> str:
        return PROMPT_TEMPLATE.format(context=context, question=question)

    def query(self, question: str, thread_id: str | None = None) -> Response:
        contexts = self._retrieve(question)
        context = self._format_contexts(contexts)
        prompt = self._format_prompt(question, context)
        messages = [{"role": "user", "content": prompt}]
        initial_response: str = (
            self._openai_client.chat.completions.create(
                model=MODEL,
                messages=messages,  # type:ignore[arg-type]
            )
            .choices[0]
            .message.content
        ) or ""

        ### Code to integrate Cleanlab with this AI app ###
        validation_results = self._project.validate(
            messages=messages,  # type:ignore[arg-type]
            response=initial_response,
            query=question,
            context=context,
            metadata={"thread_id": thread_id} if thread_id else None,
        )

        if validation_results.expert_answer is not None:
            response = validation_results.expert_answer
        elif validation_results.should_guardrail:
            response = self._get_fallback_answer_from_guardrail_results(
                validation_results.eval_scores, validation_results.deterministic_guardrails_results
            )
        else:
            response = initial_response
        ### End of code to integrate Cleanlab ###

        return {
            "response": response,
            "original_response": initial_response,
            "validation_result": validation_results,
        }

    def _get_fallback_answer_from_guardrail_results(
        self,
        eval_scores: dict[str, EvalScores],
        deterministic_guardrails_results: dict[str, DeterministicGuardrailsResults] | None,
    ) -> str:
        if deterministic_guardrails_results is not None:
            for guardrail_result in deterministic_guardrails_results.values():
                if guardrail_result.should_guardrail and guardrail_result.fallback_message is not None:
                    return guardrail_result.fallback_message

        for eval_score in eval_scores.values():
            if eval_score.triggered and eval_score.guardrailed_fallback_message is not None:
                return eval_score.guardrailed_fallback_message

        return FALLBACK_ANSWER
