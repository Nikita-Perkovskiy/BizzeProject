import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { sliderStyles, styles } from "./ForIndividuals.styled";
import { IndividualsImages } from "./IndividualsImages";
import { ScreensSlider } from "components/ScreensSlider";
import { ReactComponent as IndividualsBgMob } from "assets/svg/individuals-bg-mob.svg";
import { ReactComponent as IndividualsBgTablet } from "assets/svg/individuals-bg-tablet.svg";
import { ReactComponent as IndividualsBgDesktop } from "assets/svg/individuals-bg-desktop.svg";
import { slidesConfig } from "./constants";

export const ForIndividuals = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.backgroundWrapper}>
        <IndividualsBgMob className="mobileBg" />
        <IndividualsBgTablet className="tabletBg" />
        <IndividualsBgDesktop className="desktopBg" />
      </Box>
      <Box sx={styles.contentContainer}>
        <ScreensSlider
          className="forIndividualsSlider"
          dir="rtl"
          slidesConfig={slidesConfig}
          sliderStyles={sliderStyles}
        />
        <Typography variant="h1" sx={styles.sectionTitle}>
          For Individuals
        </Typography>
        <Typography sx={styles.mainText}>
          Welcome to our exclusive platform, where you can discover and book the
          most sought-after salon services in town.
        </Typography>
        <Typography sx={styles.mainText}>
          If {`you're`} craving some pampering or looking to enhance your beauty
          routine, our handpicked selection of high-end salons is here to cater
          to your every need.
        </Typography>
        <Button className="primaryBlack" sx={styles.signUpBtn}>
          Sign Up
        </Button>
        <IndividualsImages />
      </Box>
    </Box>
  );
};
