from django.urls import path

from accounts.views import create_user, get_user_details_by_access_token, login_user

urlpatterns = [
    path("register", create_user, name="register"),
    path("login", login_user, name="login"),
    path("details", get_user_details_by_access_token, name="details")
]
