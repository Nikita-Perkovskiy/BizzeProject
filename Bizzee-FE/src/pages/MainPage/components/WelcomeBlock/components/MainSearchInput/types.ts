import { SxProps, Theme } from "@mui/material";
import { IContentItem } from "pages/MainPage/interface";

export interface IMainSearchInputProps {
  data: IContentItem[];
  onSearch: (value: string) => void;
  sx?: SxProps<Theme>;
  placeholder?: string;
  maxLength?: number;
  searchInput?: string;
}
