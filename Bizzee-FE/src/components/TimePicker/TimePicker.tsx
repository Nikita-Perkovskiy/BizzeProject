import React, { FC } from "react";
import { Box } from "@mui/material";
import DatePicker from "react-datepicker";
import { ITimePickerProps } from "./types";

export const TimePicker: FC<ITimePickerProps> = ({
  selectedDate,
  onSelectDate,
  toggleCalendarOnIconClick,
  showIcon,
  icon,
  onKeyDown,
  disabled,
  customInput,
}) => {
  const handleSelectDate = (date: Date) => {
    if (date) {
      onSelectDate(date);
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleSelectDate}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      timeFormat="HH:mm"
      dateFormat="HH:mm"
      toggleCalendarOnIconClick={toggleCalendarOnIconClick}
      popperPlacement="bottom-start"
      showIcon={showIcon}
      icon={icon ? <Box>{icon}</Box> : undefined}
      onKeyDown={onKeyDown}
      disabled={disabled}
      customInput={customInput}
    />
  );
};
