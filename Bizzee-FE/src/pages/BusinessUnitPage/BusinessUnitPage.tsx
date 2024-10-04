import React from "react";
import { AboutBusiness } from "./components/AboutBusiness";
import { MastersSection } from "./components/MastersSection";
import { AllServicesSection } from "./components/AllServicesSection";
import { CommentsInfo } from "./components/CommentsInfo";
import { FooterBlock } from "pages/MainPage/components/FooterBlock/FooterBlock";
import { Box } from "@mui/material";
import { styles } from "./BusinessUnitPage.styled";

export const BusinessUnitPage = () => {
  return (
    <>
      <Box sx={styles.contentBlock}>
        <AboutBusiness />
        <AllServicesSection />
        <MastersSection />
        <CommentsInfo />
      </Box>
      <Box sx={styles.footer}>
        <FooterBlock />
      </Box>
    </>
  );
};
