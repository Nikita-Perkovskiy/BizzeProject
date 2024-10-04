import { Box, Button } from "@mui/material";
import React from "react";
import { styles } from "./Buttons.styled";

export const Buttons = () => {
  return (
    <Box sx={styles.buttonsContainer}>
      <Button sx={styles.signUpBtn} className="primaryBlack">
        Sign Up
      </Button>
      <Button sx={styles.signUpBtn} className="primaryYellow">
        Аdd Your Business
      </Button>
    </Box>
  );
};
