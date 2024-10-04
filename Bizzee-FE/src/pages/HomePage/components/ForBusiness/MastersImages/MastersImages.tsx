import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { styles } from "./MastersImages.styled";
import { mastersPhotosConfig } from "./constants";

export const MastersImages = () => {
  return (
    <Box sx={styles.photosContainer}>
      {mastersPhotosConfig.map((master) => (
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
