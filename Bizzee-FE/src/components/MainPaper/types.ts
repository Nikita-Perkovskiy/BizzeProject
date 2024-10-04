import { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface IMainPaperProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
  sx?: SxProps<Theme>;
}
