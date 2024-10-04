import React, { FC, memo, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Title } from "components/Title/Title";
import { InfoCustomDays } from "../InfoCustomDays";
import DatePicker from "react-datepicker";
import { TimeSelect } from "components/TimeSelect";
import { SwitchButton } from "components/SwitchButton";
import { styles } from "./CustomDays.styled";
import { styles as styled } from "components/RangePicker/RangePicker.styled";
import { ICustomDays } from "./types";
import { ICurrentCustomDatesDTO } from "../../types";
import { timeOptions } from "utils/timeOptions";

export const CustomDays: FC<ICustomDays> = memo(
  ({ currentCustomDatesDTO, hasCustomData }) => {
    const defaultDate = new Date();
    const disabled = false;
    const [isWeekend, setIsWeekend] = useState<boolean>(false);
    const [currentDay, setCurrrentDay] = useState<Date>(defaultDate);
    const [updateData, setUpdateData] = useState<ICurrentCustomDatesDTO | null>(
      null,
    );
    const [endTime, setEndTime] = useState<string | null>(null);
    const [startTime, setStartTime] = useState<string | null>(null);

    useEffect(() => {
      if (currentDay) return;
    }, []);

    const handleSelectDate = (date: Date) => {
      setCurrrentDay(date);
    };

    const handleSwitchButton = () => setIsWeekend((prev) => !prev);

    const handleSelectCustomStartTime = (value: string) => {
      setStartTime(value);
    };

    const handleSelectCustomEndTime = (value: string) => {
      setEndTime(value);
    };
    return (
      <>
        <Box sx={styles.headerContent}>
          <Title text="add custom dates" />
          <Box sx={styles.infoCustomDays}>
            <InfoCustomDays />
          </Box>
        </Box>

        <Box
          sx={{
            ...styled.datePicker(!disabled),
            ...styles.wrapperDatePicker,
          }}
        >
          <DatePicker
            calendarClassName="datepicker-container"
            inline
            selected={currentDay}
            onChange={handleSelectDate}
          />
        </Box>

        <Box sx={styles.daySwitcherWrapper}>
          <SwitchButton onClick={handleSwitchButton} checked={isWeekend} />
          <Typography>Day-off</Typography>
        </Box>

        <Box sx={styles.timeInputsWrapper}>
          <Box>
            <TimeSelect
              name="customDatesDTO.customTimeFrom"
              label="From*"
              placeholder="00:00"
              optionsData={timeOptions}
              initialValue={timeOptions[0]}
              handleSelect={handleSelectCustomStartTime}
              sx={styles.timeSelect}
              wihoutChekIkon
            />
          </Box>
          <Box sx={styles.dash} />
          <Box>
            <TimeSelect
              name="customTimeTo"
              label="To*"
              placeholder="00:00"
              optionsData={timeOptions}
              initialValue={timeOptions[0]}
              handleSelect={handleSelectCustomEndTime}
              sx={styles.timeSelect}
              wihoutChekIkon
            />
          </Box>
        </Box>
      </>
    );
  },
);
