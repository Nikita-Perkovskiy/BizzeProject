import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./MainModal.styled";
import { IMainModalProps } from "./MainModalTypes";
import { OnlyModal } from "components/OnlyModal";

export const MainModal = ({
  openModal,
  modalClose,
  handleAction,
  titleMessage,
  bodyMessage,
  buttonMessage,
  secondBtnMessage,
  sx,
  isBlockModal,
  zIndex = 1650,
}: IMainModalProps) => {
  const modalStyles = {
    ...styles,
    ...sx,
  };

  return (
    <OnlyModal isOpen={openModal} handleClose={modalClose} zIndex={zIndex}>
      <Box sx={modalStyles.modalContent}>
        <Typography variant="h1" sx={styles.modalTitle}>
          {titleMessage}
        </Typography>
        <Typography sx={styles.modalDescription}>{bodyMessage}</Typography>
        <Box sx={modalStyles.modalButtonsContainer}>
          <Button
            onClick={isBlockModal ? handleAction : modalClose}
            sx={modalStyles.actionButton}
            className="secondary"
          >
            {secondBtnMessage || "Cancel"}
          </Button>
          <Button
            onClick={isBlockModal ? modalClose : handleAction}
            sx={modalStyles.actionButton}
            className="primaryYellow"
          >
            {buttonMessage}
          </Button>
        </Box>
      </Box>
    </OnlyModal>
  );
};
