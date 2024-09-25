from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from .serializers import CreateUserSerializer
from .services.auth_service import authenticate_user, generate_token, serialize_user


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

    return Response({
        "access_token": token.access_token,
        "refresh_token": token.refresh_token,
        "user_data": user_data,
    })


