import re

from rest_framework.exceptions import ValidationError

from interfaces.validator import Validator


class UsernameValidator(Validator):
    def __init__(self, min_length: int, max_length: int, username_regex_pattern: re.Pattern):
        self.min_length = min_length
        self.max_length = max_length
        self.pattern = username_regex_pattern

    def validate(self, username: str):
        """
        Validate the provided username based on presence and regex pattern.

        Raises:
            ValidationError: If the username is invalid.
        """
        self._validate_presence(username)
        self._validate_pattern(username)

    @staticmethod
    def _validate_presence(username: str):
        """
        Ensure that the username is not None or empty.

        Raises:
            ValidationError: If the username is None or empty.
        """
        if not username:
            raise ValidationError({"username": "Username cannot be empty."})

    def _validate_pattern(self, username: str):
        """
        Ensure that the username matches the regex pattern.

        Raises:
            ValidationError: If the username does not match the pattern.
        """
        if not self.pattern.fullmatch(username):
            raise ValidationError({
                "username": (
                    f"Username must be between {self.min_length} and {self.max_length} "
                    "characters long, start with a letter, and contain only letters, "
                    "numbers, and underscores."
                )
            })
