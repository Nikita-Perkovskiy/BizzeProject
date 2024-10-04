import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./FormBanner.styled";
import { ReactComponent as Scissors } from "assets/svg/scissors-banner.svg";
import { ReactComponent as Sprayer } from "assets/svg/sprayer-banner.svg";

export const FormBanner: FC = () => {
  return (
    <Box sx={styles.bannerContainer}>
      <Box sx={styles.bannerIconScissors}>
        <Scissors />
      </Box>
      <Box sx={styles.bannerIconSprayer}>
        <Sprayer />
      </Box>
      <Box sx={styles.bannerTitles}>
        <Typography sx={styles.bannerSubtitle}>
          your indispensable assistant
        </Typography>
        <Typography sx={styles.bannerTitle}>book! confirm! provide!</Typography>
      </Box>
    </Box>
  );
};
