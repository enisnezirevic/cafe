// Account Validation

// First Name
const FIRST_NAME_MIN_LENGTH = 3;
const FIRST_NAME_MAX_LENGTH = 32;

// Last Name
const LAST_NAME_MIN_LENGTH = 3;
const LAST_NAME_MAX_LENGTH = 32;

// Username
const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 32;
const USERNAME_REGEX = new RegExp(`^[a-zA-Z][a-zA-Z0-9_]{${MIN_USERNAME_LENGTH - 1},${MAX_USERNAME_LENGTH - 1}}$`);

// Email
const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/);

// Password
const PASSWORD_REGEX = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[A-Za-z0-9#?!@$%^&*-]{8,}$/);


export {
  FIRST_NAME_MIN_LENGTH,
  FIRST_NAME_MAX_LENGTH,
  LAST_NAME_MIN_LENGTH,
  LAST_NAME_MAX_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  USERNAME_REGEX,
  EMAIL_REGEX,
  PASSWORD_REGEX
};
