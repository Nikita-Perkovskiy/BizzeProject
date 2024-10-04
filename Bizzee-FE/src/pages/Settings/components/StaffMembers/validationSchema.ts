import * as yup from "yup";

export const validationSchema = yup.object({
  searchQuery: yup.string(),
});
