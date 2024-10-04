import * as yup from "yup";
import {
  PASSWORD_DIGIT_REGEX,
  PASSWORD_LOWERCASE_REGEX,
  PASSWORD_SPECIAL_CHAR_REGEX,
  PASSWORD_UPPERCASE_REGEX,
} from "./regex";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../../constants";

export const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(MIN_PASSWORD_LENGTH, "Password must be at least 8 characters")
    .max(MAX_PASSWORD_LENGTH, "Password must not exceed 48 characters")
    .matches(
      PASSWORD_LOWERCASE_REGEX,
      "Password must contain at least one lowercase letter",
    )
    .matches(
      PASSWORD_UPPERCASE_REGEX,
      "Password must contain at least one uppercase letter",
    )
    .matches(PASSWORD_DIGIT_REGEX, "Password must contain at least one digit")
    .matches(
      PASSWORD_SPECIAL_CHAR_REGEX,
      "Password must contain at least one special character",
    ),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .min(MIN_PASSWORD_LENGTH, "Password must be at least 8 characters")
    .max(MAX_PASSWORD_LENGTH, "Password must not exceed 48 characters")
    .matches(
      PASSWORD_LOWERCASE_REGEX,
      "Password must contain at least one lowercase letter",
    )
    .matches(
      PASSWORD_UPPERCASE_REGEX,
      "Password must contain at least one uppercase letter",
    )
    .matches(PASSWORD_DIGIT_REGEX, "Password must contain at least one digit")
    .matches(
      PASSWORD_SPECIAL_CHAR_REGEX,
      "Password must contain at least one special character",
    ),
});
