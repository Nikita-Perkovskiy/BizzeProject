import { FormikProps } from "formik";

export interface IFormValues {
  [key: string]: string;
}

export interface initialData {
  title: string;
  value: string;
}

export interface AutocompleteInputProps {
  formik: FormikProps<IFormValues>;
  name: string;
  id?: string;
  label?: string;
  options: initialData[];
  placeholder?: string;
}
