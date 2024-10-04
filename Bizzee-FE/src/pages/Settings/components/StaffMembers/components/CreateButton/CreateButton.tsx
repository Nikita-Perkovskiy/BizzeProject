import React from "react";
import { ReactComponent as PlusIcon } from "assets/svg/plus_icon.svg";
import { IconButton } from "@mui/material";
import { styles } from "./CreateButton.styled";
import { CreateButtonFormProps } from "./interface";

export const CreateButton: React.FC<CreateButtonFormProps> = ({
  toggleFunction,
  disabled,
}) => {
  return (
    <IconButton
      disableRipple
      sx={styles.createButtonWrapper}
      disabled={disabled}
      onClick={toggleFunction}
      role="button"
    >
      <PlusIcon />
    </IconButton>
  );
};
