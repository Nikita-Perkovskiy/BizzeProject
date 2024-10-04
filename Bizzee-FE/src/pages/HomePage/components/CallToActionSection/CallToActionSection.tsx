import React from "react";
import { Box, Container } from "@mui/material";
import { styles } from "./CallToActionSection.styled";
import { Rectangle } from "./Rectangle/Rectangle";
import { Text } from "./Text";
import { Buttons } from "./Buttons";

export const CallToActionSection = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Rectangle />
      <Container>
        <Text />
        <Buttons />
      </Container>
    </Box>
  );
};
