import { FormikProps } from "formik";
import { IFormValues } from "../../pages/Settings/components/BusinessUnits/components/GeneralUnitInfo/GeneralUnitInfoTypes";
import { InitialValue } from "pages/Settings/components/StaffMembers/components/MasterForm/interface";

export interface IAddPhotoInput {
  formik: FormikProps<IFormValues> | FormikProps<InitialValue>;
  name: string;
  id?: string;
  link?: string;
  isDelete?: (imageStatus: boolean) => void;
}
