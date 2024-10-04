import React, { FC } from "react";
import { TYPE_WORKING_DAYS } from "../../../constants";
import { Box, Typography } from "@mui/material";
import { styles } from "./TypeOfDays.styled";

export const TypeOfDays: FC = () => {
  return (
    <>
      {TYPE_WORKING_DAYS.map((day) => (
        <Box sx={styles.typeOfDays} key={day.type}>
          <Typography sx={styles.text}>
            <Box
              component="span"
              sx={{
                ...styles.typeOfDaysSpan,
                backgroundColor: day.backgroundColor,
                color: day.color,
              }}
            >
              1
            </Box>
            {day.type}
          </Typography>
        </Box>
      ))}
    </>
  );
};
