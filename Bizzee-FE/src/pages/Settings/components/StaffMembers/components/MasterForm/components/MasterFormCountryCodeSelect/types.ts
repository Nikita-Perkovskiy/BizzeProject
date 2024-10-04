import { ReactNode } from "react";
import { FormikProps } from "formik";
import { SxProps, Theme } from "@mui/material/styles";
import { InitialValue } from "pages/Settings/components/StaffMembers/components/MasterForm/interface";

export interface ICodeOptions {
  name: string;
  flag: ReactNode;
  code: string;
}

export interface IMasterFormCountryCodeSelectProps {
  formik: FormikProps<InitialValue>;
  sx?: SxProps<Theme>;
  wrapperStyle?: SxProps<Theme>;
  disabled?: boolean;
}