import { Typography, Box } from "@mui/material";
import React, { FC } from "react";
import { styles } from "./Subtitle.styled";
import { ISubtitleProps } from "./types";
import { partsOfSubtitle } from "utils";

export const Subtitle: FC<ISubtitleProps> = ({ text, highlight, sx }) => {
  const titleStyles = {
    ...styles.subtitle,
    ...sx,
  };

  const renderTextWithHighlight = (text: string, highlight?: string) => {
    if (!highlight) {
      return text;
    }

    const parts = partsOfSubtitle(text, highlight);

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <Box
          component="span"
          key={index}
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          {part}
        </Box>
      ) : (
        part
      ),
    );
  };

  return (
    <Typography sx={titleStyles}>
      {renderTextWithHighlight(text, highlight)}
    </Typography>
  );
};
