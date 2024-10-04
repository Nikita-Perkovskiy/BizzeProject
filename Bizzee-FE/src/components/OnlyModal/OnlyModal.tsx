import React, { FC } from "react";
import { Box, Modal } from "@mui/material";
import { styles } from "./OnlyModal.styled";
import { IOnlyModalProps } from "./constants";
import { CloseBtn } from "components/CloseBtn";

export const OnlyModal: FC<IOnlyModalProps> = ({
  isOpen,
  handleClose,
  children,
  disabled,
  zIndex,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        zIndex,
      }}
    >
      <Box sx={styles.modalContainer}>
        <CloseBtn
          handleClose={handleClose}
          disabled={disabled}
          sx={styles.modalIconClose}
        />
        <Box sx={styles.modalContent}>{children}</Box>
      </Box>
    </Modal>
  );
};
