import React, { FC, memo, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { SwitchButton } from "components/SwitchButton";
import { styles as styled } from "../../WorkingHours.styled";
import { styles } from "./DaysOfWeek.styled";
import { IWorkingDay } from "../../types";
import { IDaysOfWeek } from "./types";
import { TimeSelect } from "components/TimeSelect";

export const DaysOfWeek: FC<IDaysOfWeek> = memo(
  ({
    day,
    numberOfDay,
    selectedDays,
    startTimeDate,
    endTimeDate,
    timeOptions,
    workingDaysDTOS,
    hasData,
  }) => {
    const [isActive, setIsActive] = useState(false);
    const [startTime, setStartTime] = useState(startTimeDate);
    const [endTime, setEndTime] = useState(endTimeDate);

    useEffect(() => {
      setStartTime(startTimeDate);
      setEndTime(endTimeDate);
    }, [startTimeDate, endTimeDate]);

    useEffect(() => {
      const currentDayData = workingDaysDTOS.find(
        (workingDay) =>
          workingDay.dayOfWeek.toLowerCase() === day.toLowerCase(),
      );

      if (currentDayData) {
        setStartTime(currentDayData.fromTime);
        setEndTime(currentDayData.toTime);
        setIsActive(currentDayData.active);
      }
    }, [day, workingDaysDTOS]);

    const handleSwitchButton = () => setIsActive((prev) => !prev);

    const handleStartDateTimeChange = (time: string) => {
      if (time >= endTime) {
        setStartTime(time);
        setEndTime(time);
      } else {
        setStartTime(time);
        if (time > endTime) {
          setEndTime(time);
        }
      }
    };

    const handleEndDateTimeChange = (time: string) => {
      time >= startTime ? setEndTime(time) : setEndTime(startTime);
    };

    useEffect(() => {
      const workingDay: IWorkingDay = {
        dayOfWeek: day.toUpperCase(),
        fromTime: isActive ? startTime : startTimeDate,
        toTime: isActive ? endTime : endTimeDate,
        active: isActive,
        numberOfDay,
      };
      selectedDays(workingDay);
    }, [isActive, startTime, endTime]);

    const validToTimes = timeOptions.filter((time) => time >= startTime);

    return (
      <Box sx={styles.daysWrapper}>
        <Box sx={styles.daySwitcherWrapper}>
          <SwitchButton
            onClick={handleSwitchButton}
            checked={isActive}
            disabled={!hasData}
          />
          <Typography>{day}</Typography>
        </Box>
        <Box
          sx={{
            ...styled.timePicker,
            ...styles.timeInputsWrapper,
          }}
        >
          <Box>
            <TimeSelect
              name="From"
              placeholder="00:00"
              optionsData={timeOptions}
              initialValue={startTime}
              handleSelect={handleStartDateTimeChange}
              sx={styled.timeSelect}
              wihoutChekIkon
              disabled={!isActive}
            />
          </Box>
          <Box sx={styles.dash} />
          <Box>
            <TimeSelect
              name="To"
              placeholder="00:00"
              optionsData={validToTimes}
              initialValue={endTime}
              handleSelect={handleEndDateTimeChange}
              sx={styled.timeSelect}
              wihoutChekIkon
              disabled={!isActive}
            />
          </Box>
        </Box>
      </Box>
    );
  },
);
