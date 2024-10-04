import React from "react";
import { Button } from "@mui/material";
import { styles } from "./SortButtons.styled";
import { ISortButtons } from "./types";

export const SortButtons = ({
  handleSort,
  sortButtons,
  activeButton,
  disabled,
}: ISortButtons) => {
  return (
    <>
      {sortButtons.map((button) => (
        <Button
          onClick={() => handleSort(button.type)}
          disabled={disabled}
          sx={
            button.type === activeButton
              ? { ...styles.sortButton, ...styles.activeSortButton }
              : styles.sortButton
          }
          key={button.label}
        >
          {button.label}
        </Button>
      ))}
    </>
  );
};
