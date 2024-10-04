import React, { FC, memo, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { SwitchButton } from "components/SwitchButton";
import { styles } from "./DaysOfWeek.styled";
import { TimeSelect } from "components/TimeSelect";
import { IDaysOfWeek } from "./types";
import { ICurrentWeekOfDays } from "../../types";
import { START_TIME_DATE } from "../../constants";

export const DaysOfWeek: FC<IDaysOfWeek> = memo(
  ({ day, numberOfDay, selectedDays, timeOptions, workingDays, hasData }) => {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [startTime, setStartTime] = useState<string>(START_TIME_DATE);
    const [endTime, setEndTime] = useState<string>(START_TIME_DATE);

    useEffect(() => {
      if (!hasData) return;

      const currentDayData = workingDays.find(
        (workingDay) =>
          workingDay.dayOfWeek.toLowerCase() === day.toLowerCase(),
      );

      if (currentDayData) {
        setStartTime(currentDayData.fromTime);
        setEndTime(currentDayData.toTime);
        setIsActive(isActive);
      } else {
        setIsActive(!isActive);
      }
    }, [workingDays]);

    useEffect(() => {
      const workingDays: ICurrentWeekOfDays = {
        dayOfWeek: day.toUpperCase(),
        fromTime: isActive ? startTime : START_TIME_DATE,
        toTime: isActive ? endTime : START_TIME_DATE,
        active: isActive,
        numberOfDay,
      };

      selectedDays(workingDays);
    }, [isActive, startTime, endTime]);

    const validToTimes = timeOptions.filter((time) => time >= startTime);

    const handleSwitchButton = () => {
      setIsActive((prev) => !prev);
    };

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
              sx={styles.timeSelect}
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
              sx={styles.timeSelect}
              wihoutChekIkon
              disabled={!isActive}
            />
          </Box>
        </Box>
      </Box>
    );
  },
);
