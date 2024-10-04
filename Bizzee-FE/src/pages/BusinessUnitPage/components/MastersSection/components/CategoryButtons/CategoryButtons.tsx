import React from "react";
import { Box, Button, Skeleton } from "@mui/material";
import { styles } from "./CategoryButtons.styled";
import { ICategoryButtons } from "./types";

export const CategoryButtons = ({
  handleSort,
  sortButtons,
  activeButton,
  disabled,
}: ICategoryButtons) => {
  return (
    <>
      {sortButtons.length === 0
        ? Array.from({ length: 3 }).map((_, index) => (
            <Box key={index}>
              <Skeleton sx={styles.skeletonButton} variant="rounded" />
            </Box>
          ))
        : sortButtons.map((button) => (
            <Button
              onClick={() => handleSort(button)}
              disabled={disabled}
              sx={
                button.title === activeButton
                  ? { ...styles.sortButton, ...styles.activeSortButton }
                  : styles.sortButton
              }
              key={button.title}
            >
              {button.title}
            </Button>
          ))}
    </>
  );
};
