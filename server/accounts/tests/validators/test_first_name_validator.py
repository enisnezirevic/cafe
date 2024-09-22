import pytest
from rest_framework.exceptions import ValidationError

from accounts.validators.first_name_validator import FirstNameValidator


def first_name_validator(min_length: int, max_length: int):
    return FirstNameValidator(min_length, max_length)


@pytest.mark.parametrize("first_name", [""])
def test_validation_first_name_is_empty_should_raise_error(first_name):
    with pytest.raises(ValidationError):
        first_name_validator(3, 9).validate(first_name)


@pytest.mark.parametrize("first_name", ["abcdefg"])
def test_validation_first_name_is_too_long_should_raise_error(first_name):
    with pytest.raises(ValidationError):
        first_name_validator(1, 3).validate(first_name)


@pytest.mark.parametrize("first_name", ["Alex"])
def test_validation_first_name_matches_the_maximum_length_should_pass(first_name):
    try:
        first_name_validator(0, 4).validate(first_name)
    except ValidationError:
        pytest.fail("First name should pass when it matches the maximum length.")
