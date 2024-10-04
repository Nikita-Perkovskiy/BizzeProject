import { SxProps, Theme } from "@mui/material/styles";

export interface IRoundIconButtonProps {
  icon: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
  disabled?: boolean;
}
