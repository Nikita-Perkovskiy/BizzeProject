import React, { FC, useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { styles } from "./FilterButtonList.styled";
import { initialAllFilter } from "config/constants";
import { IFilterButtonListProps } from "./types";

export const FilterButtonList: FC<IFilterButtonListProps> = ({
  currentFilter,
  setCurrentFilter,
  options,
  userOptions,
  isDisabled = true,
}) => {
  const [currentOption, setCurrentOption] = useState<string>(currentFilter);
  useEffect(() => {
    setCurrentFilter(initialAllFilter);
    setCurrentOption(initialAllFilter);
  }, [userOptions]);
  const handleFilterChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string,
  ) => {
    if (newFilter !== null) {
      setCurrentFilter(newFilter);
      setCurrentOption(newFilter);
    }
  };

  return (
    <ToggleButtonGroup
      value={currentOption}
      exclusive
      onChange={handleFilterChange}
      sx={styles.filtersWrapper}
    >
      <ToggleButton
        key="initial-all"
        value={initialAllFilter}
        sx={styles.filterBtn}
      >
        <Typography sx={styles.filterText}>{initialAllFilter}</Typography>
      </ToggleButton>
      {options.map((item) => (
        <ToggleButton
          key={item}
          value={item}
          sx={styles.filterBtn}
          disabled={isDisabled}
        >
          <Typography sx={styles.filterText}>{item}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
