import { SxProps, Theme } from "@mui/material";
import { FormikProps } from "formik";
import { IFormValues } from "../../GeneralUnitInfoTypes";

export interface ILinkInputProps {
  formik: FormikProps<IFormValues>;
  name: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
}
