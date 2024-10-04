import React, { FC, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, isBefore, isSameDay } from "date-fns";
import { styles } from "components/RangePicker/RangePicker.styled";
import { Box, List, ListItem } from "@mui/material";
import { PAST_DAY } from "config/constants";
import { months } from "./constants";
import { customHeaderStyles } from "./CustomHeaderDatePicker.styled";
import { ReactComponent as ArrowDown } from "assets/svg/icon_chevron.svg";
import { ReactComponent as ArrowUp } from "assets/svg/icon_chevron-up.svg";
import { ICustomHeaderDatePicker } from "./types";
import { locales } from "components/DayWeekPicker/constants";

registerLocale("en-GB", locales["en-GB"]);

export const CustomHeaderDatePicker: FC<ICustomHeaderDatePicker> = ({
  handleSelectDate,
  dateFormat,
  toggleCalendarOnIconClick,
  onBlur,
  onFocus,
  showIcon,
  minDate,
  maxDate,
  icon,
  placeholder,
  showMonthDropdown,
  showYearDropdown,
  dropdownMode,
  customInput,
  disabled,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const minYear = new Date(minDate).getFullYear();
    const maxYear = new Date(maxDate).getFullYear();
    const yearsArray = Array.from(
      { length: maxYear - minYear + 1 },
      (_, index) => minYear + index,
    ).reverse();
    setYears(yearsArray);
  }, [minDate, maxDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    handleSelectDate(date);
  };

  const getDayClassName = (date: Date): string => {
    const isToday = isSameDay(date, today);
    const isPastDay = isBefore(date, today) && !isToday;

    return isPastDay ? PAST_DAY : "";
  };

  const getMonthTitle = (date: Date) => {
    const monthIndex = date.getMonth();
    const monthObject = months.find(
      (month) => months.indexOf(month) === monthIndex,
    );
    return monthObject && monthObject.title;
  };

  return (
    <Box
      sx={{
        ...styles.datePicker(!disabled),
        ...customHeaderStyles.customHeaderPickerDays,
      }}
    >
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
        dayClassName={getDayClassName}
        locale="en-GB"
        showIcon={showIcon}
        toggleCalendarOnIconClick={toggleCalendarOnIconClick}
        onBlur={onBlur}
        onFocus={onFocus}
        minDate={minDate}
        maxDate={maxDate}
        icon={icon ? <Box>{icon}</Box> : undefined}
        placeholderText={placeholder}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        dropdownMode={dropdownMode}
        customInput={customInput}
        renderCustomHeader={({ date, changeYear, changeMonth }) => {
          const clickHandler = (
            event: React.MouseEvent<HTMLLIElement, MouseEvent>,
          ) => {
            const { textContent } = event.target as HTMLElement;
            if (textContent) {
              const foundMonth = months.find(
                (month) => month.value === textContent,
              );
              foundMonth && changeMonth(months.indexOf(foundMonth));
            }
            setIsMonthOpen((prev) => !prev);
          };
          return (
            <Box sx={customHeaderStyles.headerWrapper}>
              <Box sx={customHeaderStyles.selectWrapper}>
                <Box
                  sx={customHeaderStyles.select}
                  onClick={() => setIsMonthOpen((prev) => !prev)}
                >
                  <Box sx={customHeaderStyles.selectValue}>
                    {getMonthTitle(date)}
                  </Box>
                  <Box sx={customHeaderStyles.iconWrapper}>
                    {isMonthOpen ? <ArrowUp /> : <ArrowDown />}
                  </Box>
                </Box>
              </Box>
              {isMonthOpen && (
                <Box sx={customHeaderStyles.datepickerPopper}>
                  <Box sx={customHeaderStyles.datepickerContainer}>
                    <List>
                      {months.map((month) => (
                        <ListItem
                          sx={customHeaderStyles.datepickerListItem}
                          key={month.title}
                          onClick={clickHandler}
                        >
                          {month.value}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              )}
              <Box sx={customHeaderStyles.selectWrapper}>
                <Box
                  sx={customHeaderStyles.select}
                  onClick={() => setIsYearOpen((prev) => !prev)}
                >
                  <Box sx={customHeaderStyles.selectValue}>{getYear(date)}</Box>
                  <Box sx={customHeaderStyles.iconWrapper}>
                    {isYearOpen ? <ArrowUp /> : <ArrowDown />}
                  </Box>
                </Box>
              </Box>
              {isYearOpen && (
                <Box sx={customHeaderStyles.datepickerPopper}>
                  <Box sx={customHeaderStyles.datepickerContainer}>
                    <List>
                      {years.map((year) => (
                        <ListItem
                          sx={customHeaderStyles.datepickerListItem}
                          key={year}
                          onClick={(event) => {
                            const { textContent } = event.target as HTMLElement;
                            textContent && changeYear(Number(textContent));
                            setIsYearOpen((prev) => !prev);
                          }}
                        >
                          {year}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              )}
            </Box>
          );
        }}
      />
    </Box>
  );
};
