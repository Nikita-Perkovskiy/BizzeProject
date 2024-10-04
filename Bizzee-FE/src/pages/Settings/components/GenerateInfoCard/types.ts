import { ReactElement, ReactNode } from "react";

export interface IGenerateInfoBlock {
  icon?: ReactElement;
  title: string;
  value: ReactNode;
  extraValue?: ReactNode;
}
