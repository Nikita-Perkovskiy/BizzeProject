import React from "react";
import { Box, Container } from "@mui/material";
import { styles } from "./HeroSection.styled";
import { HeroSlider } from "./HeroSlider";
import { HeroContent } from "./HeroContent";

export const HeroSection = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentContainer}>
          <HeroSlider />
          <HeroContent />
        </Box>
      </Container>
    </Box>
  );
};
