from django.urls import path
from .views import (
    ChangePasswordView,
    SignupView,
    LoginView,
    CurrentUserView,
    CSRFTokenView,
    LogoutView,
    ChangePasswordView
)

urlpatterns = [
    path("signup/", SignupView.as_view()),
    path("login/", LoginView.as_view()),
    path("me/", CurrentUserView.as_view()),
    path("csrf/", CSRFTokenView.as_view()),
    path("logout/", LogoutView.as_view()),
    path("change-password/", ChangePasswordView.as_view()),
]