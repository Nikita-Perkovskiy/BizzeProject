import React, { FC } from "react";
import { Chip, IconButton } from "@mui/material";
import { styles } from "./MultiselectChip.styled";
import { ReactComponent as CloseIcon } from "assets/svg/icon_close.svg";
import { IMultiselectChipProps } from "./types";

export const MultiselectChip: FC<IMultiselectChipProps> = ({
  label,
  onDelete,
  disabled,
}) => {
  return (
    <Chip
      label={label}
      onDelete={
        onDelete &&
        (() => {
          onDelete(label);
        })
      }
      sx={[
        styles.wrapper,
        {
          "& .MuiChip-label": {
            mr: onDelete ? "10px" : 0,
          },
        },
      ]}
      disabled={disabled}
      skipFocusWhenDisabled
      deleteIcon={
        <IconButton sx={styles.modalIconClose} disabled={disabled}>
          <CloseIcon />
        </IconButton>
      }
    />
  );
};
