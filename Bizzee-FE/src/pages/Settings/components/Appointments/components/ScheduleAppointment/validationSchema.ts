import * as yup from "yup";
import { EMAIL_REGEX } from "./constants";
import {
  MAX_PHONE_LENGTH,
  MIN_FULLNAME_LENGTH,
} from "pages/AuthPage/constants";
import { NAME_REGEX } from "pages/AuthPage/components/SignUpForm/regex";

export const validationSchema = yup.object({
  master: yup.string().required("Please select a master"),
  procedure: yup.string().required("Please select a service"),
  name: yup
    .string()
    .min(MIN_FULLNAME_LENGTH, "Client Name must include at least 2 characters")
    .matches(
      NAME_REGEX,
      "Name can include only Latin letters, Polish letters, special characters ('-)",
    )
    .required("Please enter the client name"),
  phone: yup
    .string()
    .min(MAX_PHONE_LENGTH, "Phone number must be 9 characters")
    .required("Please enter a phone number"),
  email: yup
    .string()
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email"),
});
