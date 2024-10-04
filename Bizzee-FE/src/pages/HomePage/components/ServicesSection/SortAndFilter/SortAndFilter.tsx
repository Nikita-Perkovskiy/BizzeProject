import React from "react";
import { Button, Box, MenuItem } from "@mui/material";
import { ReactComponent as FilterIcon } from "assets/svg/sliders.svg";
import { MainInputSelect } from "components/MainInputSelect";
import { styles } from "./SortAndFilter.styled";

export const SortAndFilter = () => {
  return (
    <Box sx={styles.filtersWrapper}>
      <Button sx={styles.filtersButton}>
        <FilterIcon /> Filters
      </Button>
      <MainInputSelect
        name="sort-button"
        onChange={() => null}
        value="rating"
        disabled
        sx={styles.sortingSelect}
        wrapperStyle={styles.selectWrapper}
      >
        <MenuItem value="rating">Sort by: rating</MenuItem>
      </MainInputSelect>
    </Box>
  );
};
