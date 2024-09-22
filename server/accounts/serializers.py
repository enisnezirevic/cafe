from rest_framework import serializers

from accounts.models import User
from accounts.validators.account_validator import AccountValidator


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email", "password"]
        extra_kwargs = {
            "password": {
                "write_only": True,
            },
        }

    def validate(self, attrs):
        validator = AccountValidator()
        user = User(**attrs)
        validator.validate(user)

        return attrs

    def create(self, validated_data):
        user = User(**validated_data)

        # Hash password
        user.set_password(validated_data["password"])
        user.save()

        return True
