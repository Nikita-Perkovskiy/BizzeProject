import { SxProps, Theme } from "@mui/material";

export type IMyProfileMenuItemProps = {
  icon: React.ElementType<React.SVGProps<SVGSVGElement>> | null;
  text: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
};
