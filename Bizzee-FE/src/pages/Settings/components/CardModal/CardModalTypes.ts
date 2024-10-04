import { SxProps, Theme } from "@mui/material";

export interface IUserCardModalProps {
  openModal: boolean;
  modalClose: () => void;
  handleAction: () => void;
  titleMessage?: string;
  buttonMessage?: string;
  secondBtnMessage?: string;
  sx?: SxProps<Theme>;
  isBlockModal?: boolean;
  children?: React.ReactNode;
  type: string;
  name: string;
  userStatus: string;
}
