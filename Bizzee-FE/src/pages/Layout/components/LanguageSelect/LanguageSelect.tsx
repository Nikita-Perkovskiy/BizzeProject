import React, { useState, FC } from "react";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { languageOptions } from "pages/Layout/constants";
import { MainInputSelect } from "components/MainInputSelect";

export const LanguageSelect: FC = () => {
  const [language, setLanguage] = useState<string>(languageOptions[0]);

  const handleLanguageChange = (event: SelectChangeEvent): void => {
    setLanguage(event.target.value);
  };

  return (
    <MainInputSelect
      value={language}
      onChange={handleLanguageChange}
      sx={{
        fontSize: { md: "21px" },
        fontWeight: { md: 500 },
      }}
      disabled
    >
      {languageOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </MainInputSelect>
  );
};
