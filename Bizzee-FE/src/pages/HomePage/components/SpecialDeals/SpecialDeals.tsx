import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { styles } from "./SpecialDeals.styled";
import { ReactComponent as ArrowLeft } from "assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import { DealsSlider } from "./DealsSlider";

export const SpecialDeals = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Container>
        <Box sx={styles.topWrapper}>
          <Typography variant="h1" component="h2">
            Special deals
          </Typography>
          <Box sx={styles.arrowsContainer}>
            <IconButton>
              <ArrowLeft width="50px" height="50px" className="dealsPrev" />
            </IconButton>
            <IconButton>
              <ArrowRight width="50px" height="50px" className="dealsNext" />
            </IconButton>
          </Box>
        </Box>
        <DealsSlider />
        <Button className="primaryBlack" sx={styles.seeMoreBtn}>
          See More
        </Button>
      </Container>
    </Box>
  );
};
