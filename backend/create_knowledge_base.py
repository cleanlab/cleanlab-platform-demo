#!/usr/bin/env python3

import argparse
from pathlib import Path

from dotenv import load_dotenv

from src.rag.knowledge_base import KnowledgeBase


def main() -> None:
    load_dotenv()

    parser = argparse.ArgumentParser(description="Create a knowledge base from a directory of documents")
    parser.add_argument(
        "--directory",
        type=str,
        help="Directory containing documents to index",
        default=(Path(__file__).parent / "example_data").relative_to(Path.cwd()),
    )
    args = parser.parse_args()

    # Convert to Path object and ensure it exists
    input_dir = Path(args.directory)
    if not input_dir.exists():
        print(f"Error: Directory '{input_dir}' does not exist")
        return

    # Create output directory if it doesn't exist
    output_dir = (Path(__file__).parent / "vector_store").relative_to(Path.cwd())
    output_dir.mkdir(exist_ok=True)

    print(f"Creating knowledge base from {input_dir} ...")
    kb = KnowledgeBase.from_directory(str(input_dir))

    print(f"Persisting knowledge base to {output_dir} ...")
    kb.persist(str(output_dir))
    print("Done!")


if __name__ == "__main__":
    main()
