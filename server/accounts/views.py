from datetime import datetime

import jwt
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from .models import User
from .serializers import CreateUserSerializer
from .services.auth_service import authenticate_user, generate_token, serialize_user


# TODO: Not performance effective, should use caching
@api_view(["GET"])
def get_user_details_by_access_token(request):
    access_token = request.COOKIES.get("access_token")
    if access_token is None:
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    user_access_payload = jwt.decode(access_token, options={"verify_signature": False})
    user_id = user_access_payload["user_id"]

    user = User.objects.get(id=user_id)
    if user is None:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(serialize_user(user))
    

@api_view(["POST"])
def create_user(request):
    serializer = CreateUserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login_user(request):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        user = authenticate_user(username=username, password=password)
    except ValidationError as e:
        return Response(e.detail, status=status.HTTP_400_BAD_REQUEST)

    token = generate_token(user)
    user_data = serialize_user(user)

    access_token_payload = jwt.decode(token.access_token, options={"verify_signature": False})
    refresh_token_payload = jwt.decode(token.refresh_token, options={"verify_signature": False})

    # Extract the expiration date of tokens to set as max_age inside the cookie
    current_time = datetime.now().timestamp()
    access_token_max_age = int(access_token_payload["exp"] - current_time)
    refresh_token_max_age = int(refresh_token_payload["exp"] - current_time)

    response = JsonResponse({
        "user_data": user_data,
    })

    response.set_cookie(
        key="access_token",
        value=token.access_token,
        httponly=True,
        secure=True,
        samesite="Lax",
        max_age=access_token_max_age,
    )

    response.set_cookie(
        key="refresh_token",
        value=token.refresh_token,
        httponly=True,
        secure=True,
        samesite="Lax",
        max_age=refresh_token_max_age,
    )

    return response
