"""ParaBank env config for scripts or tooling (optional)."""

from dataclasses import dataclass
import os

from dotenv import load_dotenv

load_dotenv()

DEFAULT_PARABANK_URL = (
    "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC"
)


@dataclass(frozen=True)
class AppConfig:
    parabank_url: str
    username: str
    password: str


def load_config() -> AppConfig:
    return AppConfig(
        parabank_url=os.getenv("PARABANK_URL", DEFAULT_PARABANK_URL),
        username=os.getenv("PARABANK_USERNAME", ""),
        password=os.getenv("PARABANK_PASSWORD", ""),
    )
