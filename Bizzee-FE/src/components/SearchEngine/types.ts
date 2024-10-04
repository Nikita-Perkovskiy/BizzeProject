import { SxProps, Theme } from "@mui/material";

export interface IFormValues {
  [key: string]: string;
}

export interface ISearchEngineProps {
  placeholder: string;
  onSearch: (value: string) => void;
  sx?: SxProps<Theme>;
  maxLength?: number;
}
