import re

from rest_framework.exceptions import ValidationError

from interfaces.validator import Validator


class PasswordValidator(Validator):
    def __init__(self, password_regex: re.Pattern):
        self.pattern = password_regex

    def validate(self, password: str):
        """
        Validate the provided password based on presence and regex pattern.

        Raises:
            ValidationError: If the password is invalid.
        """
        self._validate_presence(password)
        self._validate_pattern(password)

    @staticmethod
    def _validate_presence(password: str):
        """
        Ensure that the password is not None or empty.

        Raises:
            ValidationError: If the password is None or empty.
        """
        if not password:
            raise ValidationError({
                "password": "Password cannot be empty.",
            })

    def _validate_pattern(self, password: str):
        """
        Ensure that the password matches the regex pattern.

        Raises:
            ValidationError: If the password does not match the pattern.
        """
        if not self.pattern.fullmatch(password):
            raise ValidationError({
                "password": "Password must be at least 8 characters long, contain at least one letter (both uppercase and lowercase), one number, "
                            "and one special character."
            })
