from django.contrib.auth import authenticate
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken

from accounts.models import User
from accounts.serializers import UserSerializer
from accounts.types.jwt_token import JwtToken


def authenticate_user(username: str, password: str):
    user = authenticate(username=username, password=password)
    if user is None:
        raise ValidationError("Invalid credentials.")

    return user


def generate_token(user: User) -> JwtToken:
    refresh_token = RefreshToken.for_user(user)
    return JwtToken(access_token=str(refresh_token.access_token), refresh_token=str(refresh_token))


def serialize_user(user: User):
    return UserSerializer(user).data
