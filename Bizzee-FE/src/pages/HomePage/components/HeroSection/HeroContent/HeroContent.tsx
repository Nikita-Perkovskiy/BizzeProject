import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./HeroContent.styled";
import { Link } from "react-router-dom";
import { routes } from "config/routes";

export const HeroContent: FC = () => {
  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.subtitle}>
          your indispensable assistant
        </Typography>
        <Typography variant="h1" sx={styles.heroTitle}>
          book! confirm! provide!
        </Typography>
      </Box>
      <Box sx={styles.bottomWrapper}>
        <Box sx={styles.mainTextWrapper}>
          <Typography sx={styles.mainText}>Discover </Typography>
          <Typography sx={styles.mainText}>
            The Perfect Beauty Experience
          </Typography>
        </Box>
        <Box sx={styles.signUpButtonWrapper}>
          <Link to={`${routes.auth.root}/${routes.auth.signup}`}>
            <Button sx={styles.signUpButton} className="primaryYellow">
              Sign up
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
