from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    api_prefix: str = "/api"
    project_name: str = "Plantilla React FastAPI"
    allowed_origins: List[str] = ["http://localhost:5173"]
    database_url: str = "sqlite:///./dev.db"
    openai_api_key: str | None = None
    jwt_secret: str = "change-me"
    jwt_algorithm: str = "HS256"

    model_config = SettingsConfigDict(env_file=".env", extra="allow")


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()