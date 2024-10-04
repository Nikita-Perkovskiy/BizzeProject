import { Typography, Box } from "@mui/material";
import { ReactComponent as HairdresserSVG } from "../../../../assets/svg/icon_hairdresser-salon.svg";
import { ReactComponent as ManicureSVG } from "../../../../assets/svg/icon_manicure-pedicure.svg";
import React from "react";
import { styles } from "./BannerForTablet.styled";
import { Container } from "@mui/system";

export const BannerForTablet: React.FC = () => {
  return (
    <Container sx={styles.bannerTabletWrapper}>
      <HairdresserSVG />
      <Box>
        <Typography textAlign="center" sx={styles.bannerTabletContent}>
          your indispensable assistant
        </Typography>
        <Typography textAlign="center" sx={styles.bannerTabletSlogo}>
          book! confirm! provide!
        </Typography>
      </Box>
      <ManicureSVG />
    </Container>
  );
};
