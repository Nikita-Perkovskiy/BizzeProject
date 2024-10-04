import React, { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./DeleteAppointment.styled";
import { OnlyModal } from "components/OnlyModal";
import { deleteAppointment } from "api/Calendar/deleteAppointment";
import { useNotificationToast } from "hooks/useNotificationToast";
import { IDeleteAppointment } from "./types";
import { IDeleteRequest } from "../types";
import { MainInputField } from "components/MainInputField";

export const DeleteAppointment: FC<IDeleteAppointment> = ({
  isBlock,
  details,
  closeModal,
  updateEventsList,
  calendarMenuDetailsClose,
  closeDetails,
}) => {
  const { id, client, startDatetime } = details;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [reason, setReason] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsModalOpen(isBlock);
  }, [isBlock]);

  const modalClose = () => {
    calendarMenuDetailsClose();
    closeDetails((cur) => !cur);
    closeModal();
  };

  const handleReasonChange = (value: string, valid: boolean) => {
    setReason(value);
    setIsValid(valid);
  };

  const handleAction = () => {
    const deleteRequest: IDeleteRequest = {
      id,
      cancelReason: reason,
    };

    deleteAppointment(deleteRequest)
      .then(() => {
        useNotificationToast({
          type: "success",
          message: "Appointment deleted successfully",
        });
        calendarMenuDetailsClose();
        closeDetails((cur) => !cur);
        updateEventsList();
      })
      .catch((error) => {
        useNotificationToast({ type: "error", message: error.message });
      });
    setIsModalOpen(false);
    closeModal();
  };

  return (
    <OnlyModal isOpen={isModalOpen} handleClose={modalClose} zIndex={1650}>
      <Box sx={styles.modalContent}>
        <Typography variant="h1" sx={styles.modalTitle}>
          Are you sure?
        </Typography>
        <Typography sx={styles.modalDescription}>
          {`Do you really want to cancel appointment with `}
          <Box component="span" sx={styles.clientName}>
            {client.name}
          </Box>
          {` on ${startDatetime && format(startDatetime, "dd.MM - HH:mm")}?`}
        </Typography>
        <MainInputField
          name="Reason*"
          label="Reason*"
          placeholder="brief cancellation reason"
          helperText="Please enter the reason of cancellation"
          sx={styles.inputReason}
          handleChange={handleReasonChange}
        />
        <Box sx={styles.modalButtonsContainer}>
          <Button
            onClick={modalClose}
            sx={styles.actionButton}
            className="secondary"
          >
            no
          </Button>
          <Button
            onClick={handleAction}
            sx={styles.actionButton}
            className="primaryYellow"
            disabled={!isValid}
          >
            yes
          </Button>
        </Box>
      </Box>
    </OnlyModal>
  );
};
