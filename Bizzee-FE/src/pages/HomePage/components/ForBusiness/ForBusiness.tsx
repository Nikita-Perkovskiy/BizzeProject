import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { sliderStyles, styles } from "./ForBusiness.styled";
import { MastersImages } from "./MastersImages";
import { ScreensSlider } from "components/ScreensSlider";
import { ReactComponent as BusinessBgMob } from "assets/svg/business-bg-mob.svg";
import { ReactComponent as BusinessBgTablet } from "assets/svg/business-bg-tablet.svg";
import { ReactComponent as BusinessBgDesktop } from "assets/svg/business-bg-desktop.svg";
import { slidesConfig } from "./constants";

export const ForBusiness = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.backgroundWrapper}>
        <BusinessBgMob className="mobileBg" />
        <BusinessBgTablet className="tabletBg" />
        <BusinessBgDesktop className="desktopBg" />
      </Box>
      <Box sx={styles.contentContainer}>
        <ScreensSlider
          className="forBusinessSlider"
          slidesConfig={slidesConfig}
          sliderStyles={sliderStyles}
        />
        <Typography variant="h1" sx={styles.sectionTitle}>
          For Business
        </Typography>
        <Typography sx={styles.mainText}>
          Our platform is the perfect place to showcase the services of your
          salon. We offer a unique opportunity to reach a wide range of clients
          and attract a new audience with your expertise
        </Typography>
        <Button className="primaryYellow" sx={styles.readMoreBtn}>
          Read More
        </Button>
        <MastersImages />
      </Box>
    </Box>
  );
};
