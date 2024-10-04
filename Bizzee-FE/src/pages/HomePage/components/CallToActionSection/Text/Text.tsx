import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Text.styled";

export const Text = () => {
  return (
    <Box sx={styles.textContainer}>
      <Typography sx={styles.text}>Look for proven services </Typography>
      <Typography sx={styles.text}>or profitable orders using</Typography>
      <Typography sx={styles.text}>
        the{" "}
        <Typography sx={[styles.text, styles.companyName]} component="span">
          bizzee
        </Typography>
        !
      </Typography>
    </Box>
  );
};
