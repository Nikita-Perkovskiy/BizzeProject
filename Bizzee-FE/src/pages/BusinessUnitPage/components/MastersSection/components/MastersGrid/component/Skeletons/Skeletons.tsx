import { Box, Card, Skeleton } from "@mui/material";
import { styles } from "../../../MasterCard/MasterCard.styled";
import React from "react";

export const Skeletons = () => {
  return (
    <Card sx={styles.wrapperCard}>
      <Skeleton variant="circular" sx={styles.profileAvatar} />
      <Box sx={styles.profileBlock}>
        <Skeleton sx={styles.skeletonAvatar} variant="rectangular" />
        <Box sx={styles.profileSpeciality}>
          {Array.from({ length: 3 }).map((_, id) => (
            <Skeleton sx={styles.skeletonCategory} key={id} />
          ))}
        </Box>
      </Box>
    </Card>
  );
};
