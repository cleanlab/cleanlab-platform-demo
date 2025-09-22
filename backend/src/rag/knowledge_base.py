from __future__ import annotations

from typing import Any, cast

from llama_index.core import SimpleDirectoryReader, StorageContext, VectorStoreIndex, load_index_from_storage
from llama_index.core.base.embeddings.base import BaseEmbedding
from llama_index.core.node_parser import MarkdownNodeParser
from llama_index.core.retrievers import BaseRetriever
from llama_index.embeddings.openai import OpenAIEmbedding  # type: ignore[import-untyped]

from src.rag.constants import EMBEDDING_MODEL


class KnowledgeBase:
    def __init__(self, index: VectorStoreIndex) -> None:
        self.index = index

    def persist(self, path: str) -> None:
        self.index.storage_context.persist(persist_dir=path)

    def as_retriever(self, **kwargs: Any) -> BaseRetriever:
        return self.index.as_retriever(**kwargs)

    @classmethod
    def _get_embed_model(cls) -> BaseEmbedding:
        return cast(
            BaseEmbedding,
            OpenAIEmbedding(
                model_name=EMBEDDING_MODEL,
                embed_batch_size=100,
            ),
        )

    @classmethod
    def from_directory(cls, directory: str) -> KnowledgeBase:
        reader = SimpleDirectoryReader(directory, recursive=True)
        documents = reader.load_data()
        index = VectorStoreIndex.from_documents(
            documents,
            transformations=[MarkdownNodeParser.from_defaults()],
            embed_model=cls._get_embed_model(),
        )
        return cls(index)

    @classmethod
    def from_persisted(cls, path: str) -> KnowledgeBase:
        storage_context = StorageContext.from_defaults(persist_dir=path)
        index = load_index_from_storage(storage_context, embed_model=cls._get_embed_model())
        if not isinstance(index, VectorStoreIndex):
            raise ValueError("Index is not a VectorStoreIndex")
        return cls(index)
