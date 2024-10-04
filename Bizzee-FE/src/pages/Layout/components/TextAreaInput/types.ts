import { FormikProps } from "formik";
import { IAddServicesFormValues } from "pages/Settings/components/Services/components/AddServices/interface";
import { InitialValue } from "pages/Settings/components/StaffMembers/components/MasterForm/interface";
import { IFormValues } from "../AuthInput/types";
import { SxProps, Theme } from "@mui/material/styles";

export interface ITextAreaInput {
  formik:
    | FormikProps<InitialValue>
    | FormikProps<IAddServicesFormValues>
    | FormikProps<IFormValues>;
  customStyles?: SxProps<Theme>;
  maxCharacters?: number;
  name?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  isCleanCounter?: boolean;
}

export interface TextAreaStyles {
  textAreaLabel: React.CSSProperties;
  textAreaInput: React.CSSProperties;
  counterStyles: React.CSSProperties;
}
