import { SxProps, Theme } from "@mui/material";

export interface IValues {
  tag: string;
  value?: string;
  inputValue?: string;
  id?: number | null;
}

export interface AutocompleteInputProps {
  name: string;
  id?: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  helperText?: string;
  options?: IValues[];
  zIndexOptions?: number;
  isError?: boolean;
  sx?: SxProps<Theme>;
  getOptionsFunc: () => Promise<IValues[]>;
  selectedValues: IValues[];
  setSelectedValues: (
    value: IValues[] | ((prevVar: IValues[]) => IValues[]),
  ) => void;
  maxTags?: number;
  hasError?: boolean;
  setHasError?: (value: boolean | ((prevValue: boolean) => boolean)) => void;
}
