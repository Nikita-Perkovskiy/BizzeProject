import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { styles } from "./IndividualsImages.styled";
import { individualsPhotosConfig } from "./constants";

export const IndividualsImages = () => {
  return (
    <Box sx={styles.photosContainer}>
      {individualsPhotosConfig.map((master) => (
        <Card sx={styles.photoCard} key={master.title}>
          <CardMedia
            component="img"
            image={master.image}
            sx={{ height: "100%" }}
            title={master.title}
          />
        </Card>
      ))}
    </Box>
  );
};
