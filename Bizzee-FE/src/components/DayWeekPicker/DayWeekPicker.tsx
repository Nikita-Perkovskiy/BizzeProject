import React, { FC, useEffect, useState } from "react";
import { IDatesPicker } from "./types";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isBefore, isSameDay, isSameMonth, parseISO } from "date-fns";
import { locales } from "./constants";
import { styles } from "./DayWeekPicker.styled";
import { styles as styled } from "../RangePicker/RangePicker.styled";
import { Box } from "@mui/material";
import {
  DAYS_IN_WEEK,
  LAST_WEEK_DAY,
  NEXT_WEEK_DAY,
  PAST_DAY,
  SINGLE_DAY,
  TODAY,
} from "config/constants";

registerLocale("en-GB", locales["en-GB"]);

export const DayWeekPicker: FC<IDatesPicker> = ({
  handleSelectDate,
  inline,
  date,
  weekPicker,
  dateFormat,
  toggleCalendarOnIconClick,
  onBlur,
  onFocus,
  showIcon,
  excludeDates,
  todayButton,
  minDate,
  maxDate,
  icon,
  onKeyDown,
  placeholder,
  showMonthDropdown,
  showYearDropdown,
  dropdownMode,
  customInput,
  disabledKeyboardNavigation,
  disabled,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);
  const [isCurrentMonth, setIsCurrentMonth] = useState<boolean>(true);
  const today = new Date();
  const isTodaySelected = selectedDate && isSameDay(selectedDate, today);

  const handleMonthChange = (date: Date) => {
    setIsCurrentMonth(isSameMonth(date, today));
  };

  useEffect(() => {
    date && setSelectedDate(date);
  }, [date]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    handleSelectDate(date);
  };

  const getWeekClassName = (date: Date): string => {
    const isSelected = selectedDate !== null;
    const isToday = isSameDay(date, today);
    const isPastDay = isBefore(date, today) && !isToday;
    const correctClass = isPastDay ? PAST_DAY : "";

    if (!isSelected) {
      return isToday ? TODAY : correctClass;
    }

    const startDate = selectedDate as Date;
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + DAYS_IN_WEEK);

    if (isSameDay(date, endDate) || (date > startDate && date < endDate)) {
      if (isSameDay(date, endDate)) {
        return `${NEXT_WEEK_DAY} ${LAST_WEEK_DAY}`;
      }
      return NEXT_WEEK_DAY;
    }

    return isPastDay ? PAST_DAY : "";
  };

  const getDayClassName = (date: Date): string => {
    const isToday = isSameDay(date, today);
    const isPastDay = isBefore(date, today) && !isToday;

    return isPastDay ? PAST_DAY : SINGLE_DAY;
  };

  const isTodayButtonActive =
    (!isTodaySelected || !isCurrentMonth) && todayButton;

  const isoDates = excludeDates?.map((date) => parseISO(date));

  return (
    <Box sx={{ ...styles.dayWeekPicker, ...styled.datePicker(!disabled) }}>
      <DatePicker
        calendarClassName="datepicker-container"
        dateFormat={dateFormat}
        selected={selectedDate}
        onChange={(date) => handleDateSelect(date as Date)}
        renderDayContents={(day) => (
          <Box component="span" className="datepicker">
            {day}
          </Box>
        )}
        onSelect={handleDateSelect}
        dayClassName={inline && weekPicker ? getWeekClassName : getDayClassName}
        locale="en-GB"
        inline={inline}
        showIcon={showIcon}
        toggleCalendarOnIconClick={toggleCalendarOnIconClick}
        onBlur={onBlur}
        onFocus={onFocus}
        excludeDates={isoDates}
        todayButton={isTodayButtonActive && "Current Date"}
        onMonthChange={handleMonthChange}
        minDate={minDate}
        maxDate={maxDate}
        icon={icon ? <Box>{icon}</Box> : undefined}
        onKeyDown={onKeyDown}
        placeholderText={placeholder}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        dropdownMode={dropdownMode}
        customInput={customInput}
        disabledKeyboardNavigation={disabledKeyboardNavigation}
      />
    </Box>
  );
};
