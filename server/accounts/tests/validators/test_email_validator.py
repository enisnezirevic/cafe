import pytest
from rest_framework.exceptions import ValidationError

from accounts.validators.email_validator import EmailValidator
from settings.validation.account_settings import EMAIL_REGEX


def email_validator():
    return EmailValidator(EMAIL_REGEX)


@pytest.mark.parametrize("email", [""])
def test_validation_email_is_empty_should_raise_error(email):
    with pytest.raises(ValidationError):
        email_validator().validate(email)


@pytest.mark.parametrize("email", ["emmm@", "@c.c", "a@.c"])
def test_validation_email_does_not_match_regex_pattern_should_raise_error(email):
    with pytest.raises(ValidationError):
        email_validator().validate(email)


@pytest.mark.parametrize("email", ["test@email.com"])
def test_validation_email_matches_regex_pattern_should_pass(email):
    try:
        email_validator().validate(email)
    except ValidationError:
        pytest.fail("Email is valid!")
