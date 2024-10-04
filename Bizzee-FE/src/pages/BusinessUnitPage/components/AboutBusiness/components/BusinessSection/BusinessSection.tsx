import React, { FC } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { styles } from "./BusinessSection.styled";

interface IBusinessSectionProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const BusinessSection: FC<IBusinessSectionProps> = ({
  children,
  sx,
}) => {
  const sectionStyles = {
    ...styles,
    ...sx,
  };

  return (
    <Box sx={styles.containerWrapper}>
      <Box component="section" sx={sectionStyles}>
        {children}
      </Box>
    </Box>
  );
};
