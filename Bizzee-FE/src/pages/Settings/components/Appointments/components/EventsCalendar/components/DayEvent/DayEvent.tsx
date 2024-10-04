import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./DayEvent.styled";
import { ICustomEventProps } from "./types";
import { useTypedDispatch } from "store";
import {
  getCurrentEventDetailsAction,
  getPopupPositionAction,
  isPopupOpenAction,
  selectedEventsAction,
} from "features/appointments/actions";
import { getAppointmentsDetails } from "api/Calendar/getAppointmentsDetails";
import { format } from "date-fns";
import { STATUS_ABSENT } from "pages/Settings/components/Appointments/constants";
import { useSelector } from "react-redux";
import { selectIsPopupOpen } from "features/selectors/appointmentsSelectors";

export const DayEvent = (props: ICustomEventProps) => {
  const {
    event: { id, fullInfo, color },
  } = props;
  const eventRef = useRef<HTMLButtonElement>(null);
  const dispatch = useTypedDispatch();
  const isAbsent = fullInfo.status.title === STATUS_ABSENT;
  const isMenuOpen = useSelector(selectIsPopupOpen);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const isSelected = isMenuOpen && selectedEvent === id;

  const handleEventSelect = async () => {
    setSelectedEvent(id);
    const details = await getAppointmentsDetails(id, {
      datetimeNow: format(new Date(), "dd/MM/yyyy HH:mm"),
    });

    dispatch(getCurrentEventDetailsAction(details));

    if (eventRef.current) {
      const { top, right } = eventRef.current.getBoundingClientRect();

      dispatch(
        getPopupPositionAction({
          top,
          right,
        }),
      );
      dispatch(isPopupOpenAction(true));
      dispatch(selectedEventsAction([fullInfo] || []));
    }
  };

  useEffect(() => {
    !isMenuOpen && setSelectedEvent(null);
  }, [isMenuOpen]);

  return (
    <Button
      sx={[
        styles.eventWrapper(color),
        isSelected && styles.selectedEvent(isAbsent),
      ]}
      ref={eventRef}
      onClick={handleEventSelect}
    >
      <Typography sx={styles.eventText}>{fullInfo.client.name}</Typography>
      <Typography sx={[styles.eventText, styles.procedureName]}>
        {fullInfo.procedures.join(", ")}
      </Typography>
    </Button>
  );
};
