import React, { useState, FC } from "react";
import { Box, MenuItem, SelectChangeEvent } from "@mui/material";
import { styles } from "./LocationSelect.styled";
import { ReactComponent as MapPinIcon } from "assets/svg/map-pin.svg";
import { cityOptions } from "pages/Layout/constants";
import { MainInputSelect } from "components/MainInputSelect";

export const LocationSelect: FC = () => {
  const [city, setCity] = useState<string>(cityOptions[0]);

  const handleCityChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={styles.locationWrapper}>
      <MapPinIcon />
      <MainInputSelect value={city} onChange={handleCityChange} disabled>
        {cityOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MainInputSelect>
    </Box>
  );
};
