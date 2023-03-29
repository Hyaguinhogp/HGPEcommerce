from rest_framework import serializers
from .models import User


class AccountSerializer(serializers.ModelSerializer):
    email: serializers.EmailField()

    class Meta:
        model = User
        fields = ["id", "username", "email", "is_active", "password"]
        read_only_fields = ["id", "is_active"]
        extra_kwargs = {"password": {"write_only": True}}
