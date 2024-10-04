import { ReactNode } from "react";
import { FormikProps } from "formik";
import { IFormValues } from "../GeneralUnitInfoTypes";

export interface ILinkItemProps {
  formik: FormikProps<IFormValues>;
  icon: ReactNode;
  title: string;
  name: string;
  placeholder?: string;
}
