import { FormikProps } from "formik";
import { IAddServicesFormValues } from "pages/Settings/components/Services/components/AddServices/interface";
import { SxProps, Theme } from "@mui/material/styles";
import {
  InitialValue,
  initialData,
} from "pages/Settings/components/StaffMembers/components/MasterForm/interface";

export interface AutocompleteInputProps {
  formik: FormikProps<InitialValue> | FormikProps<IAddServicesFormValues>;
  sx?: SxProps<Theme>;
  name: string;
  id?: string;
  label?: string;
  options?: initialData[];
  placeholder?: string;
  userOptions?: initialData[];
  maxOptions?: number | null;
  cleanOptions?: boolean;
}
