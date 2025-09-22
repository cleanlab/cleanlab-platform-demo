from __future__ import annotations

from enum import StrEnum

from pydantic import BaseModel, Field, TypeAdapter


class MessageRole(StrEnum):
    USER = "user"
    ASSISTANT = "assistant"


class EvalLog(BaseModel):
    explanation: str | None = None


class EvalResult(BaseModel):
    score: float | None = None
    triggered: bool | None = None
    triggered_escalation: bool | None = None
    triggered_guardrail: bool | None = None
    log: EvalLog | None = None


ResponseScoreMetadata = dict[str, EvalResult]
ResponseScoreMetadataAdapter = TypeAdapter(ResponseScoreMetadata)


class MessageMetadata(BaseModel):
    original_llm_response: str | None = None
    is_expert_answer: bool | None = None
    guardrailed: bool | None = None
    escalated_to_sme: bool | None = None
    scores: ResponseScoreMetadata | None = None


class Message(BaseModel):
    thread_id: str | None = None
    role: MessageRole
    content: str
    metadata: MessageMetadata = Field(default_factory=MessageMetadata)
