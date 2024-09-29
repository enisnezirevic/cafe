import re

# First Name
FIRST_NAME_MIN_LENGTH = 3
FIRST_NAME_MAX_LENGTH = 32

# Last Name
LAST_NAME_MIN_LENGTH = 3
LAST_NAME_MAX_LENGTH = 32

# Username
USERNAME_MIN_LENGTH = 3
USERNAME_MAX_LENGTH = 32
USERNAME_REGEX = re.compile(rf'^[a-zA-Z][a-zA-Z0-9_]{{{USERNAME_MIN_LENGTH - 1},{USERNAME_MAX_LENGTH - 1}}}$')

# Email
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$')

# Password
PASSWORD_REGEX = re.compile(r'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9#?!@$%^&*-]{8,}$')

# Default User Group
DEFAULT_GROUP_NAME = "member"