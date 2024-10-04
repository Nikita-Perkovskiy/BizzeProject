import React from "react";
import { Box } from "@mui/material";
import { styles } from "./CommentsInfo.styled";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { CommentsBlock } from "../CommentsBlock";
import { BusinessSection } from "../AboutBusiness/components/BusinessSection";

export const CommentsInfo = () => {
  return (
    <BusinessSection sx={styles.blockWrapper}>
      <InfoBlock />
      <Box sx={styles.commentsWrapper}>
        <CommentsBlock />
      </Box>
    </BusinessSection>
  );
};
