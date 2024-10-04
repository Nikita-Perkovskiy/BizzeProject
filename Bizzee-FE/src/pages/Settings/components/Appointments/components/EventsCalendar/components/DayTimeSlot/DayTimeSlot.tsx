import React from "react";
import { Box, Button } from "@mui/material";
import { ReactComponent as PlusBtnIcon } from "assets/svg/plus_icon.svg";
import { TimeSlotWrapperProps } from "../TimeSlotWrapper/types";
import { styles } from "../TimeSlotWrapper/TimeSlotWrapper.styled";
import {
  createTimeAction,
  selectedMasterAction,
  toggleCreateWindowOpenAction,
} from "features/appointments/actions";
import { useTypedDispatch } from "store";
import { useSelector } from "react-redux";
import { selectResources } from "features/selectors/appointmentsSelectors";

export const DayTimeSlot = (props: TimeSlotWrapperProps) => {
  const { children, resource, value } = props;
  const isTimeSlot = resource === undefined;
  const dispatch = useTypedDispatch();
  const resourceMap = useSelector(selectResources);

  const handleCreateAppointment = () => {
    dispatch(toggleCreateWindowOpenAction(true));
    dispatch(createTimeAction(value.toString()));

    if (resource) {
      const currentMaster = resourceMap.find(
        (savedResource) => savedResource.resourceId === Number(resource),
      );
      if (currentMaster) {
        const { resourceId, resourceTitle } = currentMaster;

        dispatch(
          selectedMasterAction({
            id: resourceId,
            name: resourceTitle,
          }),
        );
      }
    }
  };

  return (
    <Box sx={styles.wrapper}>
      {isTimeSlot ? (
        children
      ) : (
        <Button sx={styles.addBtnSlot} onClick={handleCreateAppointment}>
          <PlusBtnIcon />
        </Button>
      )}
    </Box>
  );
};
