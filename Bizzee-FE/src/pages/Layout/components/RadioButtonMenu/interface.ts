import { FormikProps } from "formik";
import {
  IAddServicesFormValues,
  selectOptions,
} from "pages/Settings/components/Services/components/AddServices/interface";

export interface IRadioButtonMenuProps {
  formik: FormikProps<IAddServicesFormValues>;
  name: string;
  id?: string;
  options?: selectOptions[];
}

export interface CustomStyles {
  customIcon: React.CSSProperties;
  customCheckIcon: React.CSSProperties;
  checkDrop: React.CSSProperties;
}
