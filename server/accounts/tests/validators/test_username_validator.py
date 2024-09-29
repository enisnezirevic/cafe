import pytest
from rest_framework.exceptions import ValidationError

from accounts.validators.username_validator import UsernameValidator
from settings.validation.account_settings import USERNAME_REGEX


def username_validator(min_length: int, max_length: int):
    return UsernameValidator(min_length, max_length, USERNAME_REGEX)


@pytest.mark.parametrize("username", [None])
def test_validation_username_is_null_should_fail(username):
    with pytest.raises(ValidationError):
        username_validator(2, 5).validate(username)


@pytest.mark.parametrize("username", ["#&&*#$"])
def test_validation_username_contains_special_characters_should_raise_error(username):
    with pytest.raises(ValidationError):
        username_validator(3, 999).validate(username)


@pytest.mark.parametrize("username", ["Tx"])
def test_validation_username_is_below_minimum_length_should_raise_error(username):
    with pytest.raises(ValidationError):
        username_validator(3, 999).validate(username)


@pytest.mark.parametrize("username", ["Username123" * 12])
def test_validation_username_is_beyond_maximum_length_should_raise_error(username):
    with pytest.raises(ValidationError):
        username_validator(3, 5).validate(username)
