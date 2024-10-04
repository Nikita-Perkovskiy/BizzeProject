import React, { FC } from "react";
import { Box, MenuItem } from "@mui/material";
import { styles } from "./MasterFormCountryCodeSelect.styled";
import { IMasterFormCountryCodeSelectProps } from "./types";
import { codeOptions } from "pages/Layout/components/CountryCodeSelect/constants";
import { MainInputSelect } from "components/MainInputSelect";

export const MasterFormCountryCodeSelect: FC<
  IMasterFormCountryCodeSelectProps
> = ({ sx, formik, wrapperStyle, disabled }) => {
  const selectStyles = {
    ...sx,
  };
  return (
    <MainInputSelect
      value={formik.values.countryCode || formik.initialValues.countryCode}
      onChange={formik.handleChange}
      sx={selectStyles}
      wrapperStyle={wrapperStyle}
      name="countryCode"
      disabled={true}
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
