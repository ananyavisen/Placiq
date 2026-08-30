from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, logout
from django.middleware.csrf import get_token
from .serializers import SignupSerializer, LoginSerializer
from .models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth import get_user_model
from django.core.mail import send_mail


class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            return Response({
                "message": "Account created successfully.",
                "user": {
                    "id": user.id,
                    "name": user.name,
                    "email": user.email
                }
            }, status=status.HTTP_201_CREATED)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            login(request, user)

            return Response({
                "message": "Login successful.",
                "user": {
                    "id": user.id,
                    "name": user.name,
                    "email": user.email
                }
            }, status=status.HTTP_200_OK)

        return Response(
            serializer.errors,
            status=status.HTTP_401_UNAUTHORIZED
        )

class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        return Response({
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "profile_photo": (
                request.build_absolute_uri(user.profile_photo.url)
                if user.profile_photo
                else None
            ),
            "target_role": user.target_role,
            "target_companies": user.target_companies,
            "experience_level": user.experience_level,
            "preferred_location": user.preferred_location,
            "preferred_job_type": user.preferred_job_type,
        })

    def patch(self, request):
        user = request.user

        if "name" in request.data:
            user.name = request.data["name"]

        if "email" in request.data:
            user.email = request.data["email"]

        if "profile_photo" in request.FILES:
            user.profile_photo = request.FILES["profile_photo"]

        user.save()

        return Response({
            "message": "Profile updated successfully.",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "profile_photo": (
                    request.build_absolute_uri(
                        user.profile_photo.url
                    )
                    if user.profile_photo
                    else None
                ),
            }
        })

class CSRFTokenView(APIView):
    def get(self, request):
        return Response({
            "csrfToken": get_token(request)
        })


class LogoutView(APIView):
    def post(self, request):
        logout(request)

        return Response({
            "message": "Logout successful."
        }, status=status.HTTP_200_OK)

class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user

        current_password = request.data.get("current_password")
        new_password = request.data.get("new_password")

        if not current_password or not new_password:
            return Response(
                {
                    "error": "Both current and new passwords are required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if not user.check_password(current_password):
            return Response(
                {
                    "error": "Current password is incorrect."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # Django password validation
        try:
            validate_password(new_password, user)
        except ValidationError as e:
            return Response(
                {
                    "error": e.messages
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        user.set_password(new_password)
        user.save()

        # Keep current user logged in
        login(request, user)

        return Response(
            {
                "message": "Password changed successfully."
            },
            status=status.HTTP_200_OK
        )
        
class ForgotPasswordView(APIView):
    def post(self, request):
        email = request.data.get("email")

        if not email:
            return Response(
                {
                    "error": "Email is required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {
                    "error": "No account found with this email."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        uid = urlsafe_base64_encode(
            force_bytes(user.pk)
        )

        token = default_token_generator.make_token(user)

        reset_link = (
            f"http://localhost:5173/reset-password/{uid}/{token}/"
        )

        send_mail(
            subject="Reset your Placiq password",
            message=(
                f"Hi {user.name},\n\n"
                "We received a request to reset your Placiq password.\n\n"
                "Click the link below to reset your password:\n\n"
                f"{reset_link}\n\n"
                "If you did not request a password reset, "
                "you can safely ignore this email.\n\n"
                "Regards,\n"
                "Placiq Team"
            ),
            from_email=None,
            recipient_list=[user.email],
            fail_silently=False,
        )

        return Response(
            {
                "message": "Password reset link has been sent to your email."
            },
            status=status.HTTP_200_OK
        )

class ResetPasswordView(APIView):

    def post(self, request, uidb64, token):

        new_password = request.data.get("new_password")
        confirm_password = request.data.get("confirm_password")

        if not new_password or not confirm_password:
            return Response(
                {
                    "error": "Both password fields are required."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if new_password != confirm_password:
            return Response(
                {
                    "error": "Passwords do not match."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response(
                {
                    "error": "Invalid password reset link."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check whether token is valid
        if not default_token_generator.check_token(user, token):
            return Response(
                {
                    "error": "This password reset link is invalid or has expired."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # Apply Django password constraints
        try:
            validate_password(new_password, user)
        except ValidationError as e:
            return Response(
                {
                    "error": e.messages
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        user.set_password(new_password)
        user.save()

        return Response(
            {
                "message": "Password reset successfully."
            },
            status=status.HTTP_200_OK
        )