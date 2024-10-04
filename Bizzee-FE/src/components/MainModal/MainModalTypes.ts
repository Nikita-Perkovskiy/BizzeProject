import { SxProps, Theme } from "@mui/material";

export interface IMainModalProps {
  openModal: boolean;
  modalClose: () => void;
  handleAction: () => void;
  titleMessage: string;
  bodyMessage: string | React.ReactNode;
  buttonMessage: string;
  secondBtnMessage?: string;
  sx?: SxProps<Theme>;
  isBlockModal?: boolean;
  zIndex?: number;
}
