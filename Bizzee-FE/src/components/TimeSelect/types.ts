import { SxProps, Theme } from "@mui/material";

export interface ITimeSelect {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  optionsData: string[];
  zIndexOptions?: number;
  isError?: boolean;
  sx?: SxProps<Theme>;
  handleSelect: (name: string) => void;
  initialValue: string;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  wihoutChekIkon?: boolean;
  disabled?: boolean;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
