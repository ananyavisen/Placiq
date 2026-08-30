from django.urls import path
from .views import (
    ChangePasswordView,
    ForgotPasswordView,
    ResetPasswordView,
    SignupView,
    LoginView,
    CurrentUserView,
    CSRFTokenView,
    LogoutView,
    ChangePasswordView,
    ForgotPasswordView,
    ResetPasswordView,
)


urlpatterns = [
    path("signup/", SignupView.as_view()),
    path("login/", LoginView.as_view()),
    path("me/", CurrentUserView.as_view()),
    path("csrf/", CSRFTokenView.as_view()),
    path("logout/", LogoutView.as_view()),
    path("change-password/", ChangePasswordView.as_view()),
    path("forgot-password/", ForgotPasswordView.as_view()),
    path(
    "reset-password/<uidb64>/<token>/",
    ResetPasswordView.as_view()
),
]