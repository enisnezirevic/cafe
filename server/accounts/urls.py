from django.urls import path

from accounts.views import create_user, login_user

urlpatterns = [
    path("register", create_user, name="register"),
    path("login", login_user, name="login"),
]
