import * as yup from "yup";
export const validationSchema = yup.object({
  location: yup.string().notRequired(),
});