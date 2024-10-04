import { SxProps, Theme } from "@mui/material";
import { IContentItem } from "../../../../interface";

export interface SearchFormProps {
  onSearch?: (searchQuery: string) => void;
  navigateTo?: (url: string) => void;
  sx?: SxProps<Theme>;
  searchInput?: string;
  searchLocation?: string;
  setOptions?: React.Dispatch<React.SetStateAction<IContentItem[]>>;
  setTotalUnits?: (value: number | null) => void;
}
