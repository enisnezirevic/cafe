from rest_framework.exceptions import ValidationError

from interfaces.validator import Validator


class LastNameValidator(Validator):
    def __init__(self, min_length: int, max_length: int):
        self.min_length = min_length
        self.max_length = max_length

    def validate(self, last_name: str):
        """
        Validate the provided last name based on presence, length, and character content.

        Args:
            last_name (str): The last name to validate.

        Raises:
            ValidationError: If the last name is invalid.
        """
        self._validate_presence(last_name)
        self._validate_length(last_name)
        self._validate_alphabetic(last_name)

    @staticmethod
    def _validate_presence(last_name: str):
        """
        Ensure that the last name is not None.

        Args:
            last_name (str): The last name to validate.

        Raises:
            ValidationError: If the last name is None.
        """
        if type(last_name) is not str:
            raise ValidationError({"last_name": "Last name cannot be empty."})

    def _validate_length(self, last_name: str):
        """
        Ensure that the length of the last name is within the specified range.

        Args:
            last_name (str): The last name to validate.

        Raises:
            ValidationError: If the length of the last name is less than `min_length`
                             or greater than `max_length`.

        Returns:
            None
        """
        if len(last_name) < self.min_length or len(last_name) > self.max_length:
            raise ValidationError({
                "last_name": f"Last name must be between {self.min_length} and {self.max_length} characters long."
            })

    @staticmethod
    def _validate_alphabetic(last_name: str):
        """
        Ensure that the last name contains only alphabetic characters.

        Args:
            last_name (str): The last name to validate.

        Raises:
            ValidationError: If the last name contains non-alphabetic characters.
        """
        if not last_name.isalpha():
            raise ValidationError({"last_name": "Last name must only contain alphabetic characters."})
