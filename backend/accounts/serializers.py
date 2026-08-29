from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate

class SignupSerializer(serializers.ModelSerializer):

    fullName = serializers.CharField(
        source="name",
        required=True
    )

    confirmPassword = serializers.CharField(
        write_only=True,
        required=True
    )

    class Meta:
        model = User
        fields = [
            "fullName",
            "email",
            "password",
            "confirmPassword"
        ]

        extra_kwargs = {
            "password": {
                "write_only": True
            }
        }

    def validate(self, data):
        if data["password"] != data["confirmPassword"]:
            raise serializers.ValidationError({
                "confirmPassword": "Passwords do not match."
            })

        return data

    def create(self, validated_data):
        validated_data.pop("confirmPassword")

        user = User.objects.create_user(
            email=validated_data["email"],
            name=validated_data["name"],
            password=validated_data["password"]
        )

        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")

        user = authenticate(
            username=email,
            password=password
        )

        if user is None:
            raise serializers.ValidationError(
                "Invalid email or password."
            )

        if not user.is_active:
            raise serializers.ValidationError(
                "This account has been disabled."
            )

        data["user"] = user
        return data