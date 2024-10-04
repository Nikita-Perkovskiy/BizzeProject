import * as yup from "yup";
import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX, PHONE_REGEX } from "./regex";
import { VALID_COUNTRY_CODE } from "./validCountryCodes";
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_FULLNAME_LENGTH,
  MIN_FULLNAME_LENGTH,
  MAX_PHONE_LENGTH,
} from "../../constants";

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("Enter your Full Name")
    .min(MIN_FULLNAME_LENGTH, "Name must include at least 2 characters")
    .max(MAX_FULLNAME_LENGTH, "Name must not exceed 64 characters")
    .matches(
      NAME_REGEX,
      "Name can include only Latin letters, Polish letters, special characters (.'/-)",
    ),
  countryCode: yup.string().oneOf(VALID_COUNTRY_CODE, "Invalid country code"),
  phoneNumber: yup
    .string()
    .min(MAX_PHONE_LENGTH, "Phone number must be 9 characters")
    .max(MAX_PHONE_LENGTH, "Phone number must be 9 characters")
    .matches(PHONE_REGEX, "Invalid phone number format")
    .required("Enter a phone number"),
  email: yup
    .string()
    .email("Incorrect format. Please check entered email")
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email")
    .required("Enter email address"),
  password: yup
    .string()
    .required("Enter a password")
    .min(MIN_PASSWORD_LENGTH, "Password must contain at least 8 characters")
    .max(MAX_PASSWORD_LENGTH, "Password must not exceed 48 characters")
    .matches(
      PASSWORD_REGEX,
      "Password must contain only Latin letters, digits, and special characters",
    ),
});
