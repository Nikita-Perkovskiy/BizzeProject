import React, { MouseEvent, useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Title } from "components/Title/Title";
import { styles } from "./WorkingHoursBlock.styled";
import { ReactComponent as Time } from "assets/svg/icon-clock.svg";
import { ReactComponent as Chevron } from "assets/svg/icon_chevron.svg";
import { CardMenu } from "components/CardMenu";
import { Day } from "./types";
import { dayOfWeekAndTime, days } from "./constants";

export const WorkingHoursBlock = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setExpanded((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setExpanded(false);
  };
  useEffect(() => {
    const today = new Date();
    const todayDayOfWeek = days[today.getDay()];
    const todayWorkingHours = dayOfWeekAndTime.find(
      (item) => item.day === todayDayOfWeek,
    );
    if (todayWorkingHours) {
      setSelectedDay(todayWorkingHours);
    }
  }, []);

  return (
    <Box sx={styles.wrapperBlock}>
      <Title text="Working Hours" />
      <Box sx={styles.workingHoursWrapper}>
        <IconButton
          disableRipple
          onClick={handleClick}
          aria-label="info"
          sx={styles.workingHoursMenuButton}
        >
          <Box sx={styles.workingHoursSchedule}>
            <Time style={styles.infoIcon} />
            {selectedDay && (
              <Typography>
                {selectedDay.timeFrom} - {selectedDay.timeTo}
              </Typography>
            )}
          </Box>
          {expanded ? <Chevron style={styles.chevronDown} /> : <Chevron />}
        </IconButton>
        <CardMenu
          open={open}
          anchorEl={anchorEl}
          onClick={handleClose}
          sx={styles.workingHoursMenu}
        >
          {dayOfWeekAndTime.map((item) => (
            <Box key={item.day} sx={styles.itemsMenuWrapper}>
              <Typography sx={styles.menuDay}>{item.day}</Typography>
              <Typography sx={styles.menuDay}>
                {item.timeFrom} - {item.timeTo}
              </Typography>
            </Box>
          ))}
        </CardMenu>
        <Box>
          <Button
            className="primaryBlack"
            sx={styles.bookButton}
            onClick={() => null}
          >
            Book
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
