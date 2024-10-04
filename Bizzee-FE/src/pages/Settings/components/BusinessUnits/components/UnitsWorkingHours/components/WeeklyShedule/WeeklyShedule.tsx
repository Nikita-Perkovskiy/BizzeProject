import React, { FC, memo } from "react";
import { IWeeklyShedule } from "./type";
import { Box } from "@mui/material";

import { daysOfWeek } from "config/constants";
import { DaysOfWeek } from "../DaysOfWeek";
import { Title } from "components/Title/Title";
import { styles } from "./WeeklyShedule.styled";

export const WeeklyShedule: FC<IWeeklyShedule> = memo(
  ({ handleSelectDays, timeOptions, workingDays, hasData }) => {
    return (
      <>
        <Box sx={styles.headerContent}>
          <Title text="Weekly schedule" />
        </Box>
        <Box sx={styles.daysWrapper}>
          {daysOfWeek.map((day) => (
            <DaysOfWeek
              key={day.numberOfDay}
              day={day.day}
              numberOfDay={day.numberOfDay}
              selectedDays={handleSelectDays}
              timeOptions={timeOptions}
              workingDays={workingDays}
              hasData={hasData}
            />
          ))}
        </Box>
      </>
    );
  },
);
