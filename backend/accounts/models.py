from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("Email is required")

        user = self.model(
            email=self.normalize_email(email),
            name=name
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email=email,
            name=name,
            password=password
        )

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):

    # Basic Information
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    # Career Preferences
    target_role = models.CharField(
        max_length=100,
        default="Software Engineer"
    )

    target_companies = models.JSONField(
        default=list,
        blank=True
    )

    experience_level = models.CharField(
        max_length=50,
        default="Entry Level"
    )

    preferred_location = models.CharField(
        max_length=100,
        default="Delhi NCR"
    )

    preferred_job_type = models.CharField(
        max_length=50,
        default="Full-time"
    )

    # Account Information
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    def __str__(self):
        return self.email