import * as yup from "yup";
import {
  DESCRIPTION_REGEX,
  EMAIL_REGEX,
  FULL_NAME_REGEX,
  MAX_FILE_SIZE,
  PHONE_NUMBER_NO_SPACES_REGEX,
  PHONE_NUMBER_NUMBER_REGEX,
  SUPPORTED_FILE_FORMATS,
} from "./constants";

export const validationSchema = yup.object({
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
  masterLogo: yup
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
  fullName: yup
    .string()
    .required("Please enter the master’s Full name")
    .min(2, "Full Name must include at least 2 characters")
    .max(64, "Full Name must not exceed 64 characters")
    .matches(
      FULL_NAME_REGEX,
      "Full Name must contain only Latin letters, Polish letters, special characters (',-)",
    ),
  experience: yup.string().required("Please select the master’s experience"),
  language: yup.array().notRequired(),
  countryCode: yup.string().notRequired(),
  role: yup.string().required("Please select a role"),
  phoneNumber: yup
    .string()
    .required("Please enter a phone number.")
    .matches(PHONE_NUMBER_NUMBER_REGEX, "Only numbers are allowed.")
    .matches(
      PHONE_NUMBER_NO_SPACES_REGEX,
      "Phone number should not contain spaces.",
    )
    .max(9, "Phone number must be 9 characters long."),
  email: yup
    .string()
    .required("Please enter an email address.")
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email.")
    .test("is-lowercase", "Email must be in lowercase.", function (value) {
      if (value !== undefined && value.toLowerCase() !== value) {
        return this.createError({ message: "Email must be in lowercase." });
      }
      return true;
    }),
  description: yup
    .string()
    .notRequired()
    .max(280, "Description must be at most 280 characters.")
    .matches(DESCRIPTION_REGEX, {
      message:
        "Description must contain only Latin letters, Polish letters, numbers and special characters (- Gap)",
    }),
  education: yup
    .string()
    .notRequired()
    .max(1000, "Education must be at most 1000 characters.")
    .matches(DESCRIPTION_REGEX, {
      message:
        "Education must contain only Latin letters, Polish letters, numbers, and special characters (- Gap).",
    }),
  imageLink: yup.string().notRequired(),
});

export const editMasterValidationSchema = yup.object({
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
  masterLogo: yup
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
  fullName: yup
    .string()
    .required("Please enter the master’s Full name")
    .min(2, "Full Name must include at least 2 characters")
    .max(64, "Full Name must not exceed 64 characters")
    .matches(
      FULL_NAME_REGEX,
      "Full Name must contain only Latin letters, Polish letters, special characters (',-)",
    ),
  experience: yup.string().required("Please select the master’s experience"),
  language: yup.array().notRequired(),
  countryCode: yup.string().notRequired(),
  phoneNumber: yup
    .string()
    .required("Please enter a phone number.")
    .matches(PHONE_NUMBER_NUMBER_REGEX, "Only numbers are allowed.")
    .matches(
      PHONE_NUMBER_NO_SPACES_REGEX,
      "Phone number should not contain spaces.",
    )
    .max(9, "Phone number must be 9 characters long."),
  email: yup
    .string()
    .required("Please enter an email address.")
    .matches(EMAIL_REGEX, "Incorrect format. Please check entered email.")
    .test("is-lowercase", "Email must be in lowercase.", function (value) {
      if (value !== undefined && value.toLowerCase() !== value) {
        return this.createError({ message: "Email must be in lowercase." });
      }
      return true;
    }),
  description: yup
    .string()
    .notRequired()
    .max(280, "Description must not exceed 280 characters")
    .matches(
      DESCRIPTION_REGEX,
      "Description must contain only Latin letters, Polish letters, numbers, and special characters (- Gap)",
    ),
  education: yup
    .string()
    .notRequired()
    .max(64, "Education must be at most 64 characters.")
    .matches(DESCRIPTION_REGEX, {
      message:
        "Education must contain only Latin letters, Polish letters, numbers, and special characters (- Gap).",
    }),
  imageLink: yup.string().notRequired(),
});
