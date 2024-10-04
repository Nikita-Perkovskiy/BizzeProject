import React, { useRef } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./TimeSlotWrapper.styled";
import { TimeSlotWrapperProps } from "./types";
import { ReactComponent as PlusBtnIcon } from "assets/svg/plus_icon.svg";
import { IAppointment } from "../../types";
import { useSelector } from "react-redux";
import { selectEvents } from "features/selectors/appointmentsSelectors";
import { format } from "date-fns";
import {
  appointmentDateFormat,
  appointmentOnlyHoursDateFormat,
} from "config/constants";
import { useTypedDispatch } from "store";
import {
  createTimeAction,
  getPopupPositionAction,
  isPopupOpenAction,
  selectedEventsAction,
  toggleCreateWindowOpenAction,
} from "features/appointments/actions";

export const TimeSlotWrapper = (props: TimeSlotWrapperProps) => {
  const { children, resource, value } = props;
  const isTimeSlot = resource === undefined;
  const isMobile = useMediaQuery("(max-width: 767px)");
  const events = useSelector(selectEvents);
  const timeSlotRef = useRef<HTMLDivElement>(null);
  const dispatch = useTypedDispatch();

  const currentDate = isMobile
    ? format(value, appointmentDateFormat)
    : format(value, appointmentOnlyHoursDateFormat);
  const currentEvents: IAppointment[] = isMobile
    ? events.eventsByStartDatetime[currentDate]
    : events.eventsByHour[currentDate];

  const handleSlotSelect = () => {
    if (timeSlotRef.current) {
      const { top, right } = timeSlotRef.current.getBoundingClientRect();

      dispatch(
        getPopupPositionAction({
          top,
          right,
        }),
      );
      dispatch(isPopupOpenAction(true));
      dispatch(selectedEventsAction(currentEvents || []));
      dispatch(createTimeAction(value.toString()));
    }
  };

  const handleCreateAppointment = () => {
    dispatch(toggleCreateWindowOpenAction(true));
    dispatch(createTimeAction(value.toString()));
  };

  const eventSlot = currentEvents ? (
    <Button onClick={handleSlotSelect} sx={styles.eventSlot}>
      <Box sx={styles.events}>
        <Typography sx={styles.eventTitle}>
          {currentEvents[0].master.name}
        </Typography>
      </Box>
      {currentEvents.length <= 1 && (
        <Typography sx={[styles.eventText, styles.procedureName]}>
          {currentEvents[0].procedures}
        </Typography>
      )}
      {currentEvents.length > 1 && (
        <Box sx={styles.showMoreText}>{`${currentEvents.length - 1} more`}</Box>
      )}
    </Button>
  ) : (
    <Button sx={styles.addBtnSlot} onClick={handleCreateAppointment}>
      <PlusBtnIcon />
    </Button>
  );

  return (
    <Box sx={styles.wrapper} ref={timeSlotRef}>
      {isTimeSlot ? children : eventSlot}
    </Box>
  );
};
