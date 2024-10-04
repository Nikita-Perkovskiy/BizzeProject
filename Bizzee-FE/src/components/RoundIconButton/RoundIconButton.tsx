import React, { FC } from "react";
import { IconButton } from "@mui/material";
import { styles } from "./RoundIconButton.styled";
import { IRoundIconButtonProps } from "./constants";

export const RoundIconButton: FC<IRoundIconButtonProps> = ({
  icon,
  onClick,
  sx,
  disabled,
}) => {
  const buttonStyles = {
    ...styles.button,
    ...sx,
  };

  return (
    <IconButton onClick={onClick} sx={buttonStyles} disabled={disabled}>
      {icon}
    </IconButton>
  );
};
