import React, { FC } from "react";
import { Switch } from "@mui/material";
import { styles } from "./SwitchButton.styled";
import { ISwitchButtonProps } from "./SwitchButtonTypes";

export const SwitchButton: FC<ISwitchButtonProps> = ({
  onClick,
  sx,
  disabled,
  checked,
}) => {
  const buttonStyles = {
    ...styles.switchButton,
    ...sx,
  };

  return (
    <Switch
      checked={checked}
      onClick={onClick}
      disabled={disabled}
      sx={buttonStyles}
    />
  );
};
