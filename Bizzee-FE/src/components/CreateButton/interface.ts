import { SxProps, Theme } from "@mui/material";

export interface CreateButtonFormProps {
  toggleFunction: () => void;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}
