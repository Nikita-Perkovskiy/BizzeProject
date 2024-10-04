import { SxProps, Theme } from "@mui/material";
export interface ISelectOptions {
  value: string;
  title: string;
  id?: number;
}

interface ColumnCount {
  xs: number;
  md: number;
  lg: number;
}

export interface IRadioGroupProps {
  name: string;
  id?: string;
  label?: string;
  defaultValue?: string;
  options?: ISelectOptions[];
  sx?: SxProps<Theme>;
  columnCount?: ColumnCount;
  tooltip: boolean;
  tooltipTitle?: string;
  tooltipPlacement?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | undefined;
  tooltipArrow?: boolean;
  disabled: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomStyles {
  customIcon: SxProps<Theme>;
  customCheckIcon: SxProps<Theme>;
  checkDrop: SxProps<Theme>;
}
