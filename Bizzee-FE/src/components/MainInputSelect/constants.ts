import { ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

export interface IMainInputSelectProps {
  children: ReactNode;
  onChange: (event: SelectChangeEvent<string>) => void;
  value: string;
  sx?: object;
  wrapperStyle?: SxProps<Theme>;
  name?: string;
  disabled?: boolean;
}
