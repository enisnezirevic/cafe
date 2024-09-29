from django.contrib.auth.models import Group
from django.db import transaction
from rest_framework import serializers

from accounts.models import User
from accounts.validators.account_validator import AccountValidator


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email"]


class AgeAgreementField(serializers.BooleanField):
    def to_internal_value(self, data):
        value = super().to_internal_value(data)
        validator = AccountValidator()
        value = validator.validate_age_agreement(value)
        return value


class CreateUserSerializer(serializers.ModelSerializer):
    age_agreement = AgeAgreementField()

    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email", "password", "age_agreement"]
        extra_kwargs = {
            "password": {
                "write_only": True,
            },
        }

    def validate(self, attrs):
        attrs.pop("age_agreement")

        validator = AccountValidator()
        user = User(**attrs)
        validator.validate(user)

        return attrs

    def create(self, validated_data):
        try:
            with transaction.atomic():
                user = User(**validated_data)

                # Hash password
                user.set_password(validated_data["password"])
                user.save()

                # Assign to group
                group = Group.objects.get(name="DEFAULT_GROUP_NAME")
                user.groups.add(group)

                return True
        except Exception:
            raise serializers.ValidationError({"detail": "An error occurred during user creation."})
