import * as yup from "yup";
import {
  NAME_REGEX,
  MAX_FILE_SIZE,
  SUPPORTED_FILE_FORMATS,
  MAX_PHONE_LENGTH,
  EMAIL_REGEX,
  PHONE_REGEX,
  ZIP_CODE_REGEX,
} from "./constants";

export const validationSchema = yup.object({
  logo: yup
    .mixed()
    .notRequired()
    .test("fileSize", "File size is too large. Max size is 5Mb.", (value) => {
      if (!value) return true;
      const file = value as File;
      return file.size <= MAX_FILE_SIZE;
    })
    .test(
      "fileFormat",
      "Invalid file format. Supported formats are PNG, JPG, SVG, HEIC.",
      (value) => {
        if (!value) return true;
        const file = value as File;
        return SUPPORTED_FILE_FORMATS.includes(file.type);
      },
    ),
  image: yup
    .mixed()
    .notRequired()
    .test("fileSize", "File size is too large. Max size is 5Mb.", (value) => {
      if (!value) return true;
      const file = value as File;
      return file.size <= MAX_FILE_SIZE;
    })
    .test(
      "fileFormat",
      "Invalid file format. Supported formats are PNG, JPG, SVG, HEIC.",
      (value) => {
        if (!value) return true;
        const file = value as File;
        return SUPPORTED_FILE_FORMATS.includes(file.type);
      },
    ),
  name: yup
    .string()
    .required("Please enter the Unit name")
    .min(2, "Unit Name must include at least 2 characters")
    .max(64, "Unit Name must not exceed 64 characters")
    .matches(
      NAME_REGEX,
      "Name must contain only Latin letters, Polish letters, special characters (',-)",
    ),
  description: yup
    .string()
    .notRequired()
    .max(1000, "Description must not exceed 1000 characters"),
  category: yup
    .array()
    .of(yup.string())
    .min(1)
    .required("Please select a category"),
  phoneNumber: yup
    .string()
    .min(MAX_PHONE_LENGTH, "Phone number must be 9 characters")
    .max(MAX_PHONE_LENGTH, "Phone number must be 9 characters")
    .matches(PHONE_REGEX, "Invalid phone number format")
    .required("Please enter a phone number"),
  email: yup
    .string()
    .email("Incorrect format. Please check entered email")
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email")
    .required("Please enter an email address"),
  countryCode: yup.string().notRequired(),
  city: yup.string().required("Please choose a city"),
  address: yup.string().required("Please choose an address"),
  zipCode: yup
    .string()
    .required("Please enter a ZIP/Postal code")
    .matches(
      ZIP_CODE_REGEX,
      "Incorrect format/unsupported character: ‘Not valid format. Please enter in 11-111 format’",
    ),
  tags: yup.array().notRequired(),
});
