import { FormikProps } from "formik";
import { SxProps, Theme } from "@mui/material/styles";
import { InitialValue } from "../../interface";

export interface IMasterFormInputProps {
  formik: FormikProps<InitialValue>;
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
  maxLength?: number;
  error?: string | number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
