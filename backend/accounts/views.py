from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login, logout
from django.middleware.csrf import get_token
from .serializers import SignupSerializer, LoginSerializer


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
            "target_role": user.target_role,
            "target_companies": user.target_companies,
            "experience_level": user.experience_level,
            "preferred_location": user.preferred_location,
            "preferred_job_type": user.preferred_job_type,
        })

    def patch(self, request):
        user = request.user

        user.target_role = request.data.get(
            "target_role",
            user.target_role
        )

        user.target_companies = request.data.get(
            "target_companies",
            user.target_companies
        )

        user.experience_level = request.data.get(
            "experience_level",
            user.experience_level
        )

        user.preferred_location = request.data.get(
            "preferred_location",
            user.preferred_location
        )

        user.preferred_job_type = request.data.get(
            "preferred_job_type",
            user.preferred_job_type
        )

        user.save()

        return Response({
            "message": "Career preferences updated successfully.",
            "user": {
                "target_role": user.target_role,
                "target_companies": user.target_companies,
                "experience_level": user.experience_level,
                "preferred_location": user.preferred_location,
                "preferred_job_type": user.preferred_job_type,
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
                {"error": "Both current and new passwords are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not user.check_password(current_password):
            return Response(
                {"error": "Current password is incorrect."},
                status=status.HTTP_400_BAD_REQUEST
            )

        if len(new_password) < 8:
            return Response(
                {"error": "New password must be at least 8 characters long."},
                status=status.HTTP_400_BAD_REQUEST
            )

        user.set_password(new_password)
        user.save()

        login(request, user)

        return Response(
            {"message": "Password changed successfully."},
            status=status.HTTP_200_OK
        )