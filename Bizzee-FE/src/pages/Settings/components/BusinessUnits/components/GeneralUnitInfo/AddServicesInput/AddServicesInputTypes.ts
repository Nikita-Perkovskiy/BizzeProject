import { FormikProps } from "formik";
import { IFormValues } from "../TagsInput/TagsInputTypes";

export interface IAddServicesInputProps {
  formik: FormikProps<IFormValues>;
  name: string;
  id: string;
  label?: string;
  placeholder: string;
  maxLength?: number;
}
