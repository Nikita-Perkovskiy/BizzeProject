import { ReactNode } from "react";
import {
  PopoverOrigin,
  PopoverPosition,
  PopoverReference,
  SxProps,
  Theme,
} from "@mui/material";

export interface ICardMenuProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  onClick: () => void;
  children: ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
  anchorReference?: PopoverReference;
  anchorPosition?: PopoverPosition;
  transformOrigin?: PopoverOrigin;
  anchorOrigin?: PopoverOrigin;
}
