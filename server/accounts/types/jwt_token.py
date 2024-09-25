from dataclasses import dataclass


@dataclass
class JwtToken:
    access_token: str
    refresh_token: str
