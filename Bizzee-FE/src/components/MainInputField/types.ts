import { SxProps, Theme } from "@mui/material";

export interface IMainInputFieldProps {
  name?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  handleChange?: (value: string, valid: boolean) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
  height?: string | object;
  labelGapMargin?: string | object;
  isError?: boolean;
  helperText?: string;
  initialValue?: string;
}
