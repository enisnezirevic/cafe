from rest_framework.exceptions import ValidationError

from interfaces.validator import Validator


class AgeValidator(Validator):
    def validate(self, age_agreement: bool):
        if not age_agreement:
            raise ValidationError("You must confirm that you are over 18 year's old.")
