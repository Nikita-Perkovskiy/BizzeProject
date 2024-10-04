import { SxProps, Theme } from "@mui/material";

export interface ISwitchButtonProps {
  sx?: SxProps<Theme>;
  onClick: () => void;
  disabled?: boolean;
  checked: boolean;
}
