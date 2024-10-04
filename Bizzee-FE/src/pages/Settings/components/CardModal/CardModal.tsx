import React from "react";
import { IUserCardModalProps } from "./CardModalTypes";
import { styles } from "./CardModal.styled";
import { Box, Button, Modal, SxProps, Theme, Typography } from "@mui/material";
import { modalContent } from "./modalContent";
import { CloseBtn } from "components/CloseBtn";
import { capitalizeNameFirstLetters } from "utils/capitalizeFirstLetter";

export const CardModal = ({
  openModal,
  modalClose,
  handleAction,
  sx,
  isBlockModal,
  type,
  name,
  userStatus,
}: IUserCardModalProps) => {
  const modalStyles = {
    ...styles,
    ...sx,
  };

  const selectedStyle = modalContent[type]?.style as (
    userStatus: string,
  ) => SxProps<Theme>;

  return (
    <Modal
      open={openModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyles.modalContainer(type)}>
        <CloseBtn handleClose={modalClose} sx={modalStyles.modalIconClose} />
        <Box sx={modalStyles.modalContent}>
          <Typography id="modal-modal-title" sx={modalStyles.modalTitle}>
            {modalContent[type].title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={modalStyles.modalDescription}
          >
            <>
              Do you really want to&nbsp;
              <Typography
                component="span"
                sx={selectedStyle && selectedStyle(userStatus)}
              >
                {modalContent[type]?.body(userStatus).map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </Typography>
              <Typography component="span" sx={styles.modalUserName}>
                &nbsp;{capitalizeNameFirstLetters(name)}?
              </Typography>
            </>
          </Typography>

          <Box sx={modalStyles.modalButtonsContainer}>
            <Button
              onClick={isBlockModal ? modalClose : handleAction}
              sx={modalStyles.modalButtonLogOut}
              className="primaryYellow"
            >
              {modalContent[type]
                .buttonMessage(userStatus)
                .map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
            </Button>
            <Button
              onClick={isBlockModal ? handleAction : modalClose}
              sx={modalStyles.modalButtonCancel}
              className="secondary"
            >
              {modalContent[type].secondBtnMessage}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
