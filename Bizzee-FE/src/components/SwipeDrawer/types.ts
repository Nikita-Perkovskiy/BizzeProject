import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export interface ICalendarMobileMenu {
  children: React.ReactNode;
  isOpen: boolean;
  toggleMenu: () => void;
  sx?: SxProps<Theme>;
  className?: string;
  anchor: "left" | "right" | "top" | "bottom";
  disableBackdrop?: boolean;
}
