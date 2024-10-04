import React, { FC } from "react";
import { Typography } from "@mui/material";
import { ITitleProps } from "./types";
import { styles } from "./Title.styled";

export const Title: FC<ITitleProps> = ({ text, sx }) => {
  const titleStyles = {
    ...styles.title,
    ...sx,
  };

  return (
    <Typography sx={titleStyles} component="h2">
      {text}
    </Typography>
  );
};
