import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "./AnimatedTextBlock.styled";
import { Box, useMediaQuery } from "@mui/material";
import { wordsAnimationText } from "./constants";
import { ButtonAnimationArrow } from "./components/ButtonAnimationArrow/ButtonAnimationArrow";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";

export const AnimatedTextBlock: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isDesktopScreen = useMediaQuery("(min-width: 1920px)");
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const wordAnimation = {
    hidden: { color: "#D6D6D6" },
    visible: (i: number) => ({
      color: i === wordsAnimationText.length - 1 ? "#FFC904" : "#2D2D2D",
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <Box sx={styles.blockFon}>
      <Box sx={styles.blockWrapper(isLargeScreen)}>
        <Box sx={styles.textBlock}>
          <motion.div ref={ref} style={{ width: "fit-content" }}>
            {wordsAnimationText.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={wordAnimation}
                style={styles.textLetter(isLargeScreen, isDesktopScreen)}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </Box>
        <Box sx={styles.buttonsWrapper}>
          <Box sx={styles.buttonsBlock}>
            <ButtonAnimationArrow
              className="primaryBlack"
              text="Sign Up"
              sx={styles.button}
              color={styles.signUpBtn.color}
              onClick={() =>
                navigate(`${routes.auth.root}/${routes.auth.signup}/client`)
              }
            />
            <ButtonAnimationArrow
              className="primaryYellow"
              text="Аdd Your Business"
              sx={styles.button}
              color={styles.button.color}
              onClick={() =>
                navigate(`${routes.auth.root}/${routes.auth.signup}/business`)
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
