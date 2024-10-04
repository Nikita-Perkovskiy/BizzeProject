import React, { FC } from "react";
import { IconButton } from "@mui/material";
import { ReactComponent as Eye } from "assets/svg/eye.svg";
import { ReactComponent as EyeOff } from "assets/svg/eye-off.svg";
import { IShowPasswordBtnProps } from "./types";

export const ShowPasswordBtn: FC<IShowPasswordBtnProps> = ({
  onShow = (): null => null,
  isShown,
  disabled,
}) => {
  const handleClick = () => {
    onShow((value) => !value);
  };

  return (
    <IconButton onClick={handleClick} disabled={disabled}>
      {isShown ? <Eye /> : <EyeOff />}
    </IconButton>
  );
};
