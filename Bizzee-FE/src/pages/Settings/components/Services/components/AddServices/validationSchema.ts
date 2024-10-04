import * as yup from "yup";
import {
  DESCRIPTION_REGEX,
  PRICE_INPUT_REGEX,
  PRICE_REGEX,
  TITLE_REGEX,
} from "./constants";

export const validationSchema = yup.object({
  title: yup
    .string()
    .required("Enter the Service title")
    .max(64)
    .test({
      name: "is-not-empty",
      message: "Enter the Service title",
      test: (value) => {
        return value.trim() !== "";
      },
    })
    .matches(
      TITLE_REGEX,
      "Service title can include only Latin letters, Polish letters, special characters (-Gap)",
    ),
  category: yup.string().required("Please select the Category"),
  description: yup
    .string()
    .max(150, "Description must be at most 150 characters")
    .matches(
      DESCRIPTION_REGEX,
      "Description can include only Latin letters, Polish letters, numbers, and special characters (-Gap)",
    ),
  location: yup.string().required("Please select the Service location"),
  priceType: yup.string().required("Please select the price type"),
  priceMin: yup
    .string()
    .matches(
      PRICE_REGEX,
      "Price (min) can include only digits, special characters (.)",
    )
    .max(5, "Price (min) cannot be more than 5 characters"),
  duration: yup.string().required("Please select the price duration"),
  priceMax: yup
    .string()
    .matches(
      PRICE_REGEX,
      "Price (max) can include only digits, special characters (.)",
    )
    .max(5, "Price (max) cannot be more than 5 characters"),
  price: yup
    .string()
    .max(5, "Price cannot be more than 5 characters")
    .matches(PRICE_INPUT_REGEX, {
      message: "Price can include only digits, special characters (.)",
    }),
  currency: yup.string(),
  additionalServiceDtos: yup.array().of(
    yup.object().shape({
      title: yup.string(),
      price: yup.string(),
      id: yup.string().uuid(),
    }),
  ),
  businessUnitsId: yup.array().required("Please select a service"),
});
