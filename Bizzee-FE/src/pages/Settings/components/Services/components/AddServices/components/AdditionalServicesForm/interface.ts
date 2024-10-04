import { FormikProps } from "formik";
import {
  IAddServicesFormValues,
  IAdditionalServiceDto,
} from "pages/Settings/components/Services/components/AddServices/interface";

export interface IAdditionalServicesFormProps {
  addServiceFormik: FormikProps<IAddServicesFormValues>;
  initialValue: IAdditionalServiceDto;
  deleteFunction: (itemId: string) => void;
  isFormOpen?: boolean;
}
