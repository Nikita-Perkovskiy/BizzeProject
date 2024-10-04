import * as yup from "yup";
import { VALID_COUNTRY_CODE } from "pages/AuthPage/components/SignUpForm/validCountryCodes";
import {
  EMAIL_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
} from "pages/AuthPage/components/SignUpForm/regex";
import { ZIP_CODE_REGEX } from "./constants";
import { MAX_PHONE_LENGTH } from "pages/AuthPage/constants";

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must include at least 2 characters")
    .max(64, "Name must not exceed 64 characters")
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
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Incorrect format. Please check entered email")
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email")
    .required("Email address is required"),
  zipCode: yup
    .string()
    .matches(
      ZIP_CODE_REGEX,
      "ZIP/Postal code must contain only numbers and special characters -",
    ),
});
