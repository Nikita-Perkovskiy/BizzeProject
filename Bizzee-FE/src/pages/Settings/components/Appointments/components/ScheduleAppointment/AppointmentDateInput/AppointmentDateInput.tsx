import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "./AppointmentDateInput.styled";
import { Box, InputLabel } from "@mui/material";
import { AppointmentDateInputProps } from "./AppointmentDateInputTypes";
import { ReactComponent as CalendarIcon } from "assets/svg/icon-calendar.svg";
import { formatStringToDate } from "utils/formatDate";
import { DayWeekPicker } from "components/DayWeekPicker";
import { subMonths } from "date-fns";

export const AppointmentDateInput: React.FC<AppointmentDateInputProps> = ({
  handleSelectDate,
  date,
  excludeDates,
  maxDate,
}) => {
  const handleDateChange = (date: Date) => {
    handleSelectDate(date);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const formattedDate = formatStringToDate(date);

  return (
    <>
      <InputLabel sx={styles.dateLabel}>Date*</InputLabel>
      <Box sx={styles.datePicker}>
        <DayWeekPicker
          dateFormat="dd/MM/yyyy"
          showIcon
          toggleCalendarOnIconClick
          handleSelectDate={handleDateChange}
          shouldCloseOnSelect
          minDate={subMonths(new Date(), 1)}
          maxDate={maxDate}
          date={formattedDate as Date}
          onKeyDown={handleKeyDown}
          excludeDates={excludeDates}
          disabledKeyboardNavigation
          icon={
            <Box>
              <CalendarIcon />
            </Box>
          }
        />
      </Box>
    </>
  );
};
