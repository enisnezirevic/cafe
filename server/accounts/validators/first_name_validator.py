from rest_framework.exceptions import ValidationError

from interfaces.validator import Validator


class FirstNameValidator(Validator):
    def __init__(self, min_length: int, max_length: int):
        self.min_length = min_length
        self.max_length = max_length

    def validate(self, first_name: str):
        """
        Validate the provided first name based on presence, length, and character content.

        Args:
            first_name (str): The first name to validate.

        Raises:
            ValidationError: If the first name is invalid.
        """
        self._validate_presence(first_name)
        self._validate_length(first_name)
        self._validate_alphabetic(first_name)

    @staticmethod
    def _validate_presence(first_name: str):
        """
        Ensure that the first name is not None.

        Args:
            first_name (str): The first name to validate.

        Raises:
            ValidationError: If the first name is None.
        """
        if type(first_name) is not str:
            raise ValidationError({"first_name": "First name cannot be empty."})

    def _validate_length(self, first_name: str):
        """
        Ensure that the length of the first name is within the specified range.

        Args:
            first_name (str): The first name to validate.

        Raises:
            ValidationError: If the length of the first name is less than `min_length`
                             or greater than `max_length`.

        Returns:
            None
        """
        if len(first_name) < self.min_length or len(first_name) > self.max_length:
            raise ValidationError({
                "first_name": f"First name must be between {self.min_length} and {self.max_length} characters long."
            })

    @staticmethod
    def _validate_alphabetic(first_name: str):
        """
        Ensure that the first name contains only alphabetic characters.

        Args:
            first_name (str): The first name to validate.

        Raises:
            ValidationError: If the first name contains non-alphabetic characters.
        """
        if not first_name.isalpha():
            raise ValidationError({"first_name": "First name must only contain alphabetic characters."})
