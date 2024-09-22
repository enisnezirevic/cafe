import re

from rest_framework.exceptions import ValidationError

from interfaces.validator import Validator


class EmailValidator(Validator):
    def __init__(self, email_regex_pattern: re.Pattern):
        self.pattern = email_regex_pattern

    def validate(self, email: str):
        """
        Validate the provided email based on presence and regex pattern.

        Args:
            email (str): The email to validate.

        Raises:
            ValidationError: If the email is invalid.
        """
        self._validate_presence(email)
        self._validate_pattern(email)

    @staticmethod
    def _validate_presence(email: str):
        """
        Ensure that the email is not None or empty.

        Raises:
            ValidationError: If the email is None or empty.
        """
        if not email:
            raise ValidationError({"email": "Email cannot be empty."})

    def _validate_pattern(self, email: str):
        """
        Ensure that the email matches the regex pattern.

        Raises:
            ValidationError: If the email does not match the pattern.
        """
        if not self.pattern.fullmatch(email):
            raise ValidationError({"email": "Enter a valid email address."})
