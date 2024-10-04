import { SxProps, Theme } from "@mui/material";

export interface IValues {
  id: number | null;
  name: string;
  address?: string;
  zipCode?: string;
  country?: string;
}

export interface AutocompleteInputProps {
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  options?: IValues[];
  zIndexOptions?: number;
  required?: boolean;
  isError?: boolean;
  sx?: SxProps<Theme>;
  getOptionsFunc: () => Promise<IValues[]>;
  handleSelect: (name: string) => void;
  handleSelectId: (id: number | null) => void;
  initialValue?: IValues;
  defaultValues?: IValues[];
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  showAllByDefault?: boolean;
  hasExtralabel?: boolean;
}
