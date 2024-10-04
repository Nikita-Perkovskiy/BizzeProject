import React, { FC, memo, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { Box } from "@mui/material";
import { styles } from "./RangePicker.styled";
import { endOfWeek, getDay, isSameDay, startOfWeek } from "date-fns";
import {
  CHOSEN_DATE,
  CHOSEN_WEEKEND,
  FIRST_WEEK_DAY,
  LAST_WEEK_DAY,
} from "config/constants";
import { IRangePicker } from "./types";
import { locales } from "components/DayWeekPicker/constants";

registerLocale("en-GB", locales["en-GB"]);

export const RangePicker: FC<IRangePicker> = memo(
  ({
    handleSelectDate,
    dateStart,
    dateEnd,
    inline,
    disabledKeyboardNavigation,
    toggleCalendarOnIconClick,
    showIcon,
    icon,
    onKeyDown,
    disabled,
    placeholderText,
    dateFormat,
    chosenDateStart,
    chosenDateEnd,
    customWorkingDays,
  }) => {
    const [startDate, setStartDate] = useState<Date | null>(dateStart || null);
    const [endDate, setEndDate] = useState<Date | null>(dateEnd || null);

    useEffect(() => {
      if (dateStart && dateEnd) {
        setStartDate(dateStart);
        setEndDate(dateEnd);
      }
    }, [dateStart, dateEnd]);
    const onChange = (dates: [Date | null, Date | null]) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      handleSelectDate(start, end);
    };

    const getCustomClasses = (date: Date): string => {
      const startOfCurrentWeek = startOfWeek(date, { weekStartsOn: 1 });
      const endOfCurrentWeek = endOfWeek(date, { weekStartsOn: 1 });

      const isFirstDayOfWeek = isSameDay(date, startOfCurrentWeek);
      const isLastDayOfWeek = isSameDay(date, endOfCurrentWeek);

      const isChosenDate =
        chosenDateStart &&
        chosenDateEnd &&
        (isSameDay(date, chosenDateStart) || date > chosenDateStart) &&
        (isSameDay(date, chosenDateEnd) || date < chosenDateEnd);

      const isWeekend = customWorkingDays?.includes(getDay(date));

      const classNames: { [key: string]: boolean } = {
        [FIRST_WEEK_DAY]: isFirstDayOfWeek,
        [LAST_WEEK_DAY]: isLastDayOfWeek,
        [CHOSEN_DATE]: isChosenDate || false,
        [CHOSEN_WEEKEND]: isWeekend || false,
      };

      return Object.keys(classNames)
        .filter((key) => classNames[key])
        .join(" ");
    };

    return (
      <Box sx={{ ...styles.datePicker(!disabled), ...styles.rangePicker }}>
        <DatePicker
          calendarClassName="datepicker-container"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline={inline}
          locale="en-GB"
          dayClassName={getCustomClasses}
          disabledKeyboardNavigation={disabledKeyboardNavigation}
          renderDayContents={(day) => (
            <Box component="span" className="datepicker">
              {day}
            </Box>
          )}
          toggleCalendarOnIconClick={toggleCalendarOnIconClick}
          showIcon={showIcon}
          onKeyDown={onKeyDown}
          icon={icon ? <Box>{icon}</Box> : undefined}
          disabled={disabled}
          placeholderText={placeholderText}
          dateFormat={dateFormat}
        />
      </Box>
    );
  },
);
