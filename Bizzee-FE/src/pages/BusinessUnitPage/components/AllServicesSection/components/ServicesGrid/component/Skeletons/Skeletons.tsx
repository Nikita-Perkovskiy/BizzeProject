import { Box, Card, Grid, Skeleton, useMediaQuery } from "@mui/material";
import { styles } from "../../../ServiceCard/ServiceCard.styled";
import React from "react";

export const Skeletons = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1145px)");
  const isMobileScreen = useMediaQuery("(max-width: 548px)");

  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <Grid item key={index} xs={isSmallScreen ? 12 : 6}>
          <Card sx={styles.wrapperCard}>
            <Box sx={styles.mainBlock}>
              <Box sx={styles.blockTitle}>
                <Skeleton sx={styles.skeletonTitle} variant="rectangular" />
              </Box>
              <Box sx={styles.blockBook}>
                {isMobileScreen && (
                  <Box>
                    <Skeleton sx={styles.skeletonHours} variant="rounded" />
                  </Box>
                )}
                <Box>
                  <Skeleton sx={styles.skeletonButton} variant="rounded" />
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
};
