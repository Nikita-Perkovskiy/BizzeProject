import { SxProps, Theme } from "@mui/material";

export interface IButtonArrowProps {
  text: string;
  sx: SxProps<Theme>;
  className?: string;
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
