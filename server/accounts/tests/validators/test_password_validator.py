import pytest
from rest_framework.exceptions import ValidationError

from accounts.validators.password_validator import PasswordValidator
from settings.validation.account_settings import PASSWORD_REGEX


def password_validator():
    return PasswordValidator(PASSWORD_REGEX)


@pytest.mark.parametrize("password", ["t"])
def test_validation_password_is_too_short_should_raise_error(password):
    with pytest.raises(ValidationError):
        password_validator().validate(password)


@pytest.mark.parametrize("password", ["passwordxe123"])
def test_validation_password_does_not_contain_special_characters_should_raise_error(password):
    with pytest.raises(ValidationError):
        password_validator().validate(password)


@pytest.mark.parametrize("password", ["PASSWORDTEST123"])
def test_validation_password_does_not_contain_lowercase_letters_should_raise_error(password):
    with pytest.raises(ValidationError):
        password_validator().validate(password)


@pytest.mark.parametrize("password", ["Password$"])
def test_validation_password_does_not_contain_numbers_should_raise_error(password):
    with pytest.raises(ValidationError):
        password_validator().validate(password)


@pytest.mark.parametrize("password", ["$123PaXssé"])
def test_validation_password_contains_non_english_letters_should_raise_error(password):
    with pytest.raises(ValidationError):
        password_validator().validate(password)


@pytest.mark.parametrize("password", ["$Password123", "P23dXa&#", "2irewH$%dabs?x"])
def test_validation_password_meets_all_the_criteria_should_pass(password):
    try:
        password_validator().validate(password)
    except ValidationError:
        pytest.fail("Password should be valid.")
