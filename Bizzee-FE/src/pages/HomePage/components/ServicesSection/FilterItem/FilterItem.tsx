import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./FilterItem.styled";
import { ReactComponent as FilterBorder } from "assets/svg/filter-border.svg";
import { IFilterItemProps } from "./constants";

export const FilterItem: FC<IFilterItemProps> = ({
  icon,
  name,
  iconStyles,
}) => {
  const filterStyles = {
    ...styles.itemWrapper,
    "& .filterIcon": {
      ...styles.itemWrapper["& .filterIcon"],
      ...iconStyles,
    },
  };
  return (
    <Box sx={filterStyles}>
      <FilterBorder className="filterBorder" />
      <Typography sx={styles.filterName}>{name}</Typography>
      {icon}
    </Box>
  );
};
