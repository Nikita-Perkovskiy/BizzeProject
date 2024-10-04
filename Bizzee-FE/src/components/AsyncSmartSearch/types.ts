import { SxProps, Theme } from "@mui/material";

export interface IValues {
  title: string;
  value: string;
}

export interface AutocompleteInputProps {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  options?: IValues[];
  zIndexOptions?: number;
  isError?: boolean;
  sx?: SxProps<Theme>;
  getOptionsFunc: () => Promise<IValues[]>;
  handleSelect: (value: string) => void;
  initialValue?: IValues;
  showAllByDefault?: boolean;
}
