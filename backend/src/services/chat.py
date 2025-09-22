import uuid
from pathlib import Path

from dotenv import load_dotenv

from src.rag.knowledge_base import KnowledgeBase
from src.rag.rag import RAG
from src.schemas.message import EvalResult, Message, MessageMetadata, MessageRole

load_dotenv()

rag = RAG(KnowledgeBase.from_persisted(str(Path(__file__).parent.parent.parent / "vector_store")))


def chat(message: str) -> Message:
    thread_id = uuid.uuid4().hex
    response = rag.query(message, thread_id=thread_id)
    eval_scores = {
        eval_key: EvalResult.model_validate(eval_result.model_dump())
        for eval_key, eval_result in response["validation_result"].eval_scores.items()
    }
    deterministic_guardrails_results = (
        {
            guardrail_key: EvalResult(
                score=0.0 if guardrail_result.should_guardrail else None,
                triggered=guardrail_result.should_guardrail,
                triggered_guardrail=guardrail_result.should_guardrail,
            )
            for guardrail_key, guardrail_result in response[
                "validation_result"
            ].deterministic_guardrails_results.items()
        }
        if response["validation_result"].deterministic_guardrails_results is not None
        else {}
    )
    return Message(
        thread_id=thread_id,
        role=MessageRole.ASSISTANT,
        content=response["response"],
        metadata=MessageMetadata(
            original_llm_response=response["original_response"],
            is_expert_answer=response["validation_result"].expert_answer is not None,
            guardrailed=response["validation_result"].should_guardrail,
            escalated_to_sme=response["validation_result"].escalated_to_sme,
            scores={**eval_scores, **deterministic_guardrails_results},
        ),
    )
