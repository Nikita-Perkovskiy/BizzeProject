import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { ReactComponent as ArrowRightBig } from "assets/svg/arrow-right-big.svg";
import { ReactComponent as ArrowRight } from "assets/svg/categoriesSVG/icon_arrow_right.svg";
import { styles } from "./CategoryCard.styled";
import { CategoryCardProps } from "./types";

export const CategoryCard: FC<CategoryCardProps> = ({
  category,
  onClick,
  activeCategory,
}) => {
  const [isHover, setIsHover] = useState(false);
  const customWidthForCart = useMediaQuery("(max-width: 580px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const styleActive = isHover || activeCategory === "active";
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Grid
      item
      sm={customWidthForCart ? 12 : 6}
      md={isLargeScreen ? 6 : 4}
      lg={3}
      sx={styles.gridItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(category.value)}
    >
      <Box sx={styles.cardWrapper(styleActive)}>
        <Box sx={styles.image}>
          <category.image style={styles.imageSize} />
        </Box>
        <Box sx={styles.titleWrapper}>
          <Box sx={styles.titleBlock}>
            <Typography sx={styles.title}>{category.title}</Typography>
          </Box>
          <Box sx={styles.arrowBlock}>
            {activeCategory === "active" || isHover ? (
              <ArrowRightBig style={styles.iconRightBig} />
            ) : (
              <ArrowRight color={styles.arrowColor.color} />
            )}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
