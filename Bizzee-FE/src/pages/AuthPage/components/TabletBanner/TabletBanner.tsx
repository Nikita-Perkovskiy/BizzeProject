import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./TabletBanner.styled";
import { ReactComponent as Scissors } from "assets/svg/scissors.svg";
import { ReactComponent as Sprayer } from "assets/svg/sprayer.svg";

export const TabletBanner: FC = () => {
  return (
    <Box sx={styles.bannerTitleContainer}>
      <Box sx={styles.bannerIconScissors}>
        <Scissors />
      </Box>
      <Box sx={styles.bannerTitleWrapper}>
        <Typography sx={styles.bannerSubtitle}>
          your indispensable assistant
        </Typography>
        <Typography sx={styles.bannerTitle}>book! confirm! provide!</Typography>
      </Box>
      <Box sx={styles.bannerIconSprayer}>
        <Sprayer />
      </Box>
    </Box>
  );
};
