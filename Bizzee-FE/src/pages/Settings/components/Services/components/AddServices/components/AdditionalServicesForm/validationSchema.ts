import * as yup from "yup";
import { OPTION_PRICE_REGEX, OPTION_TITLE_REGEX } from "./constants";

export const validationSchema = yup.object({
  title: yup
    .string()
    .max(64, "Option title must be at most 64 characters")
    .matches(
      OPTION_TITLE_REGEX,
      "Option title can include only Latin letters, Polish letters, numbers, and special characters (-Gap)",
    ),
  price: yup
    .string()
    .max(5, "Price cannot be more than 5 characters")
    .matches(
      OPTION_PRICE_REGEX,
      "Price can include only digits, special characters (.)",
    ),
  id: yup.string().required(),
});
