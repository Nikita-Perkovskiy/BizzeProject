import { SxProps, Theme } from "@mui/material/styles";

interface IStylesObj {
  container?: SxProps<Theme>;
  list?: SxProps<Theme>;
  item?: SxProps<Theme>;
}

interface IMenuObj {
  name: string;
  to: string;
}

export interface INavLinksProps {
  sx: IStylesObj;
  menuItems: IMenuObj[];
}
