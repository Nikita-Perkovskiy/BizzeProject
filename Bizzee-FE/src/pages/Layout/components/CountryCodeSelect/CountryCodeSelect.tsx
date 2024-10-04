import React, { FC } from "react";
import { Box, MenuItem } from "@mui/material";
import { styles } from "./CountryCodeSelect.styled";
import { ICountryCodeSelectProps } from "./types";
import { codeOptions } from "./constants";
import { MainInputSelect } from "components/MainInputSelect";

export const CountryCodeSelect: FC<ICountryCodeSelectProps> = ({
  sx,
  formik,
  wrapperStyle,
  disabled,
}) => {
  const selectStyles = {
    ...sx,
  };

  return (
    <MainInputSelect
      value={formik.values.countryCode}
      onChange={formik.handleChange}
      sx={selectStyles}
      wrapperStyle={wrapperStyle}
      name="countryCode"
      disabled={disabled}
    >
      {codeOptions.map((option) => (
        <MenuItem key={option.code} value={option.code}>
          <Box sx={styles.flagContainer}>{option.flag}</Box>
          {option.code}
        </MenuItem>
      ))}
    </MainInputSelect>
  );
};
