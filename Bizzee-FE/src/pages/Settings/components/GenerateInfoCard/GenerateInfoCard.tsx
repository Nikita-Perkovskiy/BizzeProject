import React from "react";
import { Box, Typography } from "@mui/material";
import { IGenerateInfoBlock } from "./types";
import { styles } from "../BusinessUnits/components/UnitCard/UnitCard.styled";

export const GenerateInfoCard = ({
  icon,
  title,
  value,
  extraValue,
}: IGenerateInfoBlock) => (
  <Box sx={styles.unitBlock}>
    {icon}
    <Box sx={styles.unitDescr}>
      <Typography sx={styles.unitTitle}>{title}</Typography>
      <Typography sx={styles.unitValue}>{value}</Typography>
      {extraValue && (
        <Typography sx={styles.unitValue}>{extraValue}</Typography>
      )}
    </Box>
  </Box>
);
