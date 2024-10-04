import React, { FC, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { Box } from "@mui/material";
import { styles } from "./MultipleDaysPicker.styled";
import { styles as styled } from "../RangePicker/RangePicker.styled";
import { IMultipleDaysPicker } from "./types";
import { locales } from "components/DayWeekPicker/constants";
import { getDay, isSameDay } from "date-fns";
import { CHOSEN_DATE, CHOSEN_WEEKEND } from "config/constants";

registerLocale("en-GB", locales["en-GB"]);

export const MultipleDaysPicker: FC<IMultipleDaysPicker> = ({
  handleSelectDate,
  date,
  inline,
  disabled,
  chosenDateStart,
  chosenDateEnd,
  customWorkingDays,
}) => {
  const [selectedDates, setSelectedDates] = useState<Date[] | null>(
    date || null,
  );

  useEffect(() => {
    date && setSelectedDates(date);
  }, [date]);

  const onChange = (dates: Date[]) => {
    setSelectedDates(dates);
    handleSelectDate(dates);
  };

  const getCustomClasses = (date: Date): string => {
    const isChosenDate =
      chosenDateStart &&
      chosenDateEnd &&
      (isSameDay(date, chosenDateStart) || date > chosenDateStart) &&
      (isSameDay(date, chosenDateEnd) || date < chosenDateEnd);

    const classNames = [];

    if (isChosenDate) {
      classNames.push(CHOSEN_DATE);
    }

    if (customWorkingDays?.includes(getDay(date))) {
      classNames.push(CHOSEN_WEEKEND);
    }

    return classNames.join(" ");
  };

  return (
    <Box sx={{ ...styled.datePicker(!disabled), ...styles.multipleDaysPicker }}>
      <DatePicker
        calendarClassName="datepicker-container"
        selectedDates={selectedDates || []}
        selectsMultiple
        onChange={onChange}
        shouldCloseOnSelect={false}
        disabledKeyboardNavigation
        inline={inline}
        locale="en-GB"
        dayClassName={getCustomClasses}
        disabled={disabled}
      />
    </Box>
  );
};
