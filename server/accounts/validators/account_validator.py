from accounts.models import User
from accounts.validators.email_validator import EmailValidator
from accounts.validators.first_name_validator import FirstNameValidator
from accounts.validators.last_name_validator import LastNameValidator
from accounts.validators.password_validator import PasswordValidator
from accounts.validators.username_validator import UsernameValidator
from settings.validation.account_validation_settings import *


class AccountValidator:
    def __init__(self):
        self.firstname_validator = FirstNameValidator(
            min_length=FIRST_NAME_MIN_LENGTH,
            max_length=FIRST_NAME_MAX_LENGTH)
        self.lastname_validator = LastNameValidator(
            min_length=LAST_NAME_MIN_LENGTH,
            max_length=LAST_NAME_MAX_LENGTH)
        self.username_validator = UsernameValidator(
            min_length=USERNAME_MIN_LENGTH,
            max_length=USERNAME_MAX_LENGTH,
            username_regex_pattern=USERNAME_REGEX)
        self.email_validator = EmailValidator(email_regex_pattern=EMAIL_REGEX)
        self.password_validator = PasswordValidator(password_regex=PASSWORD_REGEX)

    def validate(self, user: User):
        self.firstname_validator.validate(user.first_name)
        self.lastname_validator.validate(user.last_name)
        self.username_validator.validate(user.username)
        self.email_validator.validate(user.email)
        self.password_validator.validate(user.password)
