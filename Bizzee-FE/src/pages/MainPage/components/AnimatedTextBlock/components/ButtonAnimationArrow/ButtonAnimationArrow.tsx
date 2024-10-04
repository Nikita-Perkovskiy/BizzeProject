import { Box, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { ReactComponent as ArrowRightBig } from "assets/svg/arrow-right-big.svg";
import { IButtonArrowProps } from "./typed";
import { styles } from "./ButtonAnimationArrow.styled";

export const ButtonAnimationArrow: FC<IButtonArrowProps> = ({
  text,
  sx,
  color = "#33333",
  className,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      sx={{ ...styles, ...sx }}
      onClick={onClick}
    >
      <Box className="buttonContent" sx={styles.buttonContent}>
        <Box className="textButton" sx={styles.textButton}>
          {text}
        </Box>
        <Box sx={styles.arrowContainer}>
          <ArrowRightBig
            color={color}
            className="arrow"
            style={styles.arrow(isHovered)}
          />
        </Box>
      </Box>
    </Button>
  );
};
