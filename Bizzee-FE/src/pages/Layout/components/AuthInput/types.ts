import { FormikProps } from "formik";
import { SxProps, Theme } from "@mui/material/styles";
import {
  IAddServicesFormValues,
  IAdditionalServiceDto,
} from "pages/Settings/components/Services/components/AddServices/interface";
export interface IFormValues {
  [key: string]: string;
}

export interface IAuthInputProps {
  formik:
    | FormikProps<IFormValues>
    | FormikProps<IAddServicesFormValues>
    | FormikProps<IAdditionalServiceDto>;
  sx?: SxProps<Theme>;
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  startComponent?: React.ReactNode;
  endIcon?: React.ReactNode;
  password?: boolean;
  disabled?: boolean;
  placeOfWork?: "atClientsPlace" | "both" | "client";
  employees?: "onlyMe" | "2-3" | "4-6" | "more";
  maxLength?: number;
  error?: string | number;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
