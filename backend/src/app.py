from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers.rag import router as rag_router

API_PREFIX = "/api"

app = FastAPI(
    title="Cleanlab Demo Application",
    openapi_url=f"{API_PREFIX}/openapi.json",
    docs_url=f"{API_PREFIX}/docs",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()
api_router.include_router(rag_router)
app.include_router(api_router, prefix=API_PREFIX)
