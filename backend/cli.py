import pprint
from pathlib import Path

from dotenv import load_dotenv

from src.rag.knowledge_base import KnowledgeBase
from src.rag.rag import RAG


def main() -> None:
    load_dotenv()
    print("Loading knowledge base...")
    knowledge_base = KnowledgeBase.from_persisted(str(Path(__file__).parent / "vector_store/"))
    print("Knowledge base loaded")
    rag = RAG(knowledge_base)
    print()
    try:
        while True:
            message = input("Query: ")
            if not message:
                break
            response = rag.query(message)
            print()
            pprint.pp(response)
            print(f"\n{'-' * 40}", end="\n\n")
    except (KeyboardInterrupt, EOFError):
        pass


if __name__ == "__main__":
    main()
