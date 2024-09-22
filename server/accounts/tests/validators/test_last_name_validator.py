import pytest
from rest_framework.exceptions import ValidationError

from accounts.validators.last_name_validator import LastNameValidator


def last_name_validator(min_length: int, max_length: int):
    return LastNameValidator(min_length, max_length)


@pytest.mark.parametrize("last_name", [""])
def test_validation_last_name_is_empty_should_raise_error(last_name):
    with pytest.raises(ValidationError):
        last_name_validator(1, 2).validate(last_name)


@pytest.mark.parametrize("last_name", ["abcdefg"])
def test_validation_last_name_is_too_long_should_raise_error(last_name):
    with pytest.raises(ValidationError):
        last_name_validator(5, 5).validate(last_name)


@pytest.mark.parametrize("last_name", ["Smith"])
def test_validation_last_name_matches_the_maximum_length_should_pass(last_name):
    try:
        last_name_validator(0, 5).validate(last_name)
    except ValidationError:
        pytest.fail("Last name should pass when it matches the maximum length.")
