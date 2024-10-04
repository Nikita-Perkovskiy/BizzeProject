import React, { FC, useState } from "react";
import { ToolbarProps, Navigate } from "react-big-calendar";
import { Box, Button, Typography } from "@mui/material";
import { addDays, endOfWeek, getDate, startOfWeek, format } from "date-fns";
import { MONDAY } from "../../constants";
import { DayNames } from "config/types";
import { styles } from "./MobileToolbar.styled";
import { MainPaper } from "components/MainPaper";
import { ReactComponent as Arrow } from "assets/svg/icon_chevron.svg";
import { DATEPICKER_IDENTIFIER } from "./constants";
import { DayWeekPicker } from "components/DayWeekPicker";

export const MobileToolbar: FC<ToolbarProps> = (props) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSelectDate = (date: Date) => {
    props.onNavigate(Navigate.DATE, date);
    setIsDatePickerOpen(false);
  };
  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    const targetElement = event.target as HTMLElement;

    if (targetElement.classList.value.includes(DATEPICKER_IDENTIFIER)) {
      return;
    }
    setIsDatePickerOpen((isOpen) => !isOpen);
  };

  const startOfCurrentWeek = startOfWeek(props.date, {
    weekStartsOn: MONDAY,
  });
  const endOfCurrentWeek = endOfWeek(props.date, {
    weekStartsOn: MONDAY,
  });

  const weekBtns = Object.keys(DayNames).map((day, index) => {
    return {
      dayName: DayNames[day as keyof typeof DayNames],
      date: addDays(startOfCurrentWeek, index),
    };
  });

  return (
    <MainPaper sx={styles.toolbarPaper}>
      <Box sx={styles.toolbarWrapper}>
        <Box sx={styles.navigation}>
          <Button
            onClick={() => {
              props.onNavigate(Navigate.PREVIOUS);
              setIsDatePickerOpen(false);
            }}
            sx={styles.navigationBtn}
          >
            <Arrow className="left-icon" />
          </Button>

          <Box
            sx={styles.dateRange(isDatePickerOpen)}
            onClick={handleMenuToggle}
          >
            <Typography sx={styles.rangeText}>
              {format(startOfCurrentWeek, "MMM d") +
                " - " +
                format(endOfCurrentWeek, "MMM d")}
            </Typography>
            {isDatePickerOpen && (
              <Box sx={styles.datePickerWrapper}>
                <DayWeekPicker
                  handleSelectDate={handleSelectDate}
                  inline
                  weekPicker
                  date={props.date}
                  disabledKeyboardNavigation
                />
              </Box>
            )}
          </Box>

          <Button
            onClick={() => {
              props.onNavigate(Navigate.NEXT);
              setIsDatePickerOpen(false);
            }}
            sx={styles.navigationBtn}
          >
            <Arrow className="right-icon" />
          </Button>
        </Box>
        <Box sx={styles.daysWrapper}>
          {weekBtns.map((day) => {
            const isSelected = getDate(day.date) === getDate(props.date);

            return (
              <Box key={day.dayName} sx={styles.dayBtnWrapper}>
                <Typography sx={styles.dayText(isSelected)}>
                  {day.dayName.slice(0, 3)}
                </Typography>
                <Button
                  onClick={() => props.onNavigate(Navigate.DATE, day.date)}
                  sx={styles.dateBtn(isSelected)}
                >
                  {getDate(day.date)}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </MainPaper>
  );
};
