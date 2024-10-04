import React, { FC, useState } from "react";
import { ToolbarProps, Navigate, Views } from "react-big-calendar";
import { Box, Button, Typography } from "@mui/material";
import { format, addDays } from "date-fns";
import { styles } from "./MainToolbar.styled";
import { MainPaper } from "components/MainPaper";
import { ReactComponent as Arrow } from "assets/svg/icon_chevron.svg";
import { DATEPICKER_IDENTIFIER } from "../MobileToolbar/constants";
import { DAYS_IN_WEEK } from "config/constants";
import { DayWeekPicker } from "components/DayWeekPicker";
import { selectRole } from "features/selectors/authSelectors";
import { USER_ROLES } from "pages/PageRoot/components/constants";
import { useSelector } from "react-redux";

export const MainToolbar: FC<ToolbarProps> = (props) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const isWeekView = props.view === Views.WEEK;
  const userRole = useSelector(selectRole);

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

  const startDate = props.date;
  const endDate = addDays(props.date, DAYS_IN_WEEK);
  const currentDay = format(props.date, "eeee, MMM d");

  const viewsList = [
    {
      name: Views.WEEK,
    },
    {
      name: Views.DAY,
    },
  ];

  return (
    <Box>
      <Box
        sx={
          userRole === USER_ROLES.MASTER
            ? styles.switcherWrapperMaster
            : styles.switcherWrapper
        }
      >
        {viewsList.map((view) => (
          <Button
            key={view.name}
            onClick={() => props.onView(view.name)}
            sx={styles.switcherBtn(view.name === props.view)}
          >
            {view.name}
          </Button>
        ))}
      </Box>
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
                {isWeekView
                  ? `${format(startDate, "MMMM d")} -
                    ${format(endDate, "MMMM d")}`
                  : currentDay}
              </Typography>
              {isDatePickerOpen && (
                <Box sx={styles.datePickerWrapper}>
                  <DayWeekPicker
                    handleSelectDate={handleSelectDate}
                    inline
                    weekPicker={isWeekView}
                    date={props.date}
                    todayButton
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
        </Box>
      </MainPaper>
    </Box>
  );
};
