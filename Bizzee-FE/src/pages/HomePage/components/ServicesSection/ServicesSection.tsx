import React from "react";
import { Box } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { FiltersSlider } from "./FiltersSlider";
import { AvailableServices } from "./AvailableServices";

export const ServicesSection = () => {
  return (
    <Box component="section">
      <SearchBar />
      <FiltersSlider />
      <AvailableServices />
    </Box>
  );
};
