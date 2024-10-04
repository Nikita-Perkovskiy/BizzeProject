import React, { FC } from "react";
import { IconButton } from "@mui/material";
import { ReactComponent as CloseIcon } from "assets/svg/icon_close.svg";
import { styles } from "./CloseBtn.styled";
import { SxProps, Theme } from "@mui/material";

export interface ICloseBtnProps {
  handleClose: (() => void) | undefined;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export const CloseBtn: FC<ICloseBtnProps> = ({ handleClose, disabled, sx }) => {
  const buttonStyles = {
    ...styles.modalIconClose,
    ...sx,
  };
  return (
    <IconButton
      aria-label="Close"
      sx={buttonStyles}
      onClick={handleClose}
      disabled={disabled}
    >
      <CloseIcon />
    </IconButton>
  );
};
