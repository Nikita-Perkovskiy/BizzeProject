import React, { useEffect, useState } from "react";
import { styles } from "./WelcomeBlock.styled";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styles as externalStyles } from "../SalonsBlock/SalonsBlock.styled";
import { motion, AnimatePresence } from "framer-motion";
import { animationTitleWords } from "./constants";
import { SearchForm } from "./components/SearchForm";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";

export const WelcomeBlock = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isDesktopScreen = useMediaQuery("(min-width: 1920px)");
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  const AnimatedWords = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % animationTitleWords.length);
      }, 1500);
      return () => clearInterval(interval);
    }, []);

    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={animationTitleWords[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: { duration: 1.0 },
              y: { duration: 1.0 },
            },
          }}
          exit={{
            opacity: 0,
            y: -30,
            transition: {
              opacity: { duration: 1.0, delay: 0.7 },
              y: { duration: 1.0, delay: 0.7 },
            },
          }}
          style={{ display: "inline-block", textAlign: "right" }}
        >
          {animationTitleWords[index]}
        </motion.span>
      </AnimatePresence>
    );
  };

  return (
    <Box
      sx={{
        ...externalStyles.blockWrapper(isLargeScreen),
        ...styles.blockWrapper,
      }}
    >
      {isMobileScreen ? (
        <Typography
          variant="h1"
          sx={styles.blockTitle(isLargeScreen, isDesktopScreen)}
        >
          Book your life with Bizzee!
        </Typography>
      ) : (
        <Typography
          variant="h1"
          sx={styles.blockTitle(isLargeScreen, isMobileScreen)}
        >
          <Box component="span" sx={styles.animatedContainer(isLargeScreen)}>
            <AnimatedWords />
          </Box>
          <Box component="span">&nbsp;your life with Bizzee!</Box>
        </Typography>
      )}
      <SearchForm
        navigateTo={(url) =>
          navigate(`${routes.landing.root}/${routes.landing.units.root}${url}`)
        }
      />
    </Box>
  );
};
