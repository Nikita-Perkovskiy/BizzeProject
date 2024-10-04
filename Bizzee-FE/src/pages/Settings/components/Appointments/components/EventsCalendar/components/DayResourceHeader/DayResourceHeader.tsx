import React from "react";
import { Box, Typography } from "@mui/material";
import { ResourceHeaderProps } from "react-big-calendar";
import { IEventsResource } from "../../types";
import { styles } from "./DayResourceHeader.styled";

export const DayResourceHeader = (
  props: ResourceHeaderProps<IEventsResource>,
) => {
  return (
    <Box sx={styles.resourceWrapper(`#${props.resource.color}`)}>
      <Typography sx={styles.masterText}>{props.label}</Typography>
    </Box>
  );
};
