import { FormikProps } from "formik";
import { IAddServicesFormValues } from "pages/Settings/components/Services/components/AddServices/interface";

export interface IFormValues {
  [key: string]: string;
}

export interface initialData {
  title: string;
  value: string;
  id?: string;
}

export interface MultiselectAutocompleteInputProps {
  formik: FormikProps<IFormValues> | FormikProps<IAddServicesFormValues>;
  name: string;
  id?: string;
  label?: string;
  options: initialData[];
  placeholder?: string;
}
