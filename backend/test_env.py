import os

import openai
from cleanlab_codex import Project
from dotenv import load_dotenv
from llama_index.embeddings.openai import OpenAIEmbedding  # type: ignore[import-untyped]

from src.rag.constants import EMBEDDING_MODEL, MODEL

load_dotenv()

QUESTION = "How many syllables are in the phrase 'Cleanlab AI Platform'?"

def main() -> None:
    # check that we can query OpenAI
    if not os.getenv("OPENAI_API_KEY"):
        raise ValueError("OPENAI_API_KEY is not set")
    openai_client = openai.Client()
    response = openai_client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "user", "content": QUESTION},
        ],
    )
    assert response.choices[0].message.content is not None

    # check that we can get embeddings
    embed_model = OpenAIEmbedding(
        model_name=EMBEDDING_MODEL,
        embed_batch_size=100,
    )
    embedding = embed_model.get_text_embedding(QUESTION)
    assert len(embedding) > 0

    # check that we can query Codex
    codex_access_key = os.getenv("CLEANLAB_CODEX_ACCESS_KEY")
    if not codex_access_key:
        raise ValueError("CLEANLAB_CODEX_ACCESS_KEY is not set")
    Project.from_access_key(access_key=codex_access_key)  # this validates the key

    print("all ok")

if __name__ == "__main__":
    main()
