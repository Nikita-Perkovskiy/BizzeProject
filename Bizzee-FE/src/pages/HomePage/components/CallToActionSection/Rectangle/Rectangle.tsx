import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Rectangle.styled";
import { ReactComponent as MobileRectangle } from "assets/svg/CTA-rectange-mobile.svg";
import { ReactComponent as TabletRectangle } from "assets/svg/CTA-rectange-tablet.svg";
import { ReactComponent as DesktopBlackRectangle } from "assets/svg/CTA-rectange-desktop-black.svg";
import { ReactComponent as DesktopYellowRectangle } from "assets/svg/CTA-rectange-desktop-yellow.svg";

export const Rectangle = () => {
  return (
    <Box sx={styles.rectangleWrapper}>
      <MobileRectangle className="mobileRectangle" />
      <TabletRectangle className="tabletRectangle" />
      <Box sx={styles.desktopRectangle}>
        <DesktopBlackRectangle className="desktopBlackRectangle" />
        <DesktopYellowRectangle className="desktopYellowRectangle" />
      </Box>
    </Box>
  );
};
