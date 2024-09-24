import pytest
from rest_framework.exceptions import ValidationError

from accounts.validators.age_validator import AgeValidator


def age_validator():
    return AgeValidator()


@pytest.mark.parametrize("age_agreement", [False])
def test_validation_age_agreement_is_not_checked_should_raise_error(age_agreement):
    with pytest.raises(ValidationError):
        age_validator().validate(age_agreement)


@pytest.mark.parametrize("age_agreement", [True])
def test_validation_age_agreement_is_checked_should_pass(age_agreement):
    try:
        age_validator().validate(age_agreement)
    except ValidationError:
        pytest.fail("Age agreement is checked.")
