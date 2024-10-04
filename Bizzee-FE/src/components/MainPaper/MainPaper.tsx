import React, { FC } from "react";
import { Paper } from "@mui/material";
import { styles } from "./MainPaper.styled";
import { IMainPaperProps } from "./types";

export const MainPaper: FC<IMainPaperProps> = ({ children, sx = {} }) => {
  const paperStyles = {
    ...styles.wrapper,
    ...sx,
  };

  return <Paper sx={paperStyles}>{children}</Paper>;
};
