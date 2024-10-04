import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styles } from "./AvailableServices.styled";
import { ServicesGrid } from "../ServicesGrid";
import { SortAndFilter } from "../SortAndFilter";

export const AvailableServices = () => {
  return (
    <Box>
      <Container>
        <Box sx={styles.topWrapper}>
          <Typography variant="h1" component="h2">
            masters and salons
          </Typography>
          <SortAndFilter />
        </Box>
        <ServicesGrid />
        <Button className="primaryBlack" sx={styles.seeMoreBtn}>
          See more
        </Button>
      </Container>
    </Box>
  );
};
