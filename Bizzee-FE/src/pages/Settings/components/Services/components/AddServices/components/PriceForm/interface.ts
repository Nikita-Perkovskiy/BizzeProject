import { FormikProps } from "formik";
import {
  IAddServicesFormValues,
  selectOptions,
} from "pages/Settings/components/Services/components/AddServices/interface";

export interface IPriceFormProps {
  formik: FormikProps<IAddServicesFormValues>;
  priceOptions?: selectOptions[];
  timeOptions?: selectOptions[];
}
