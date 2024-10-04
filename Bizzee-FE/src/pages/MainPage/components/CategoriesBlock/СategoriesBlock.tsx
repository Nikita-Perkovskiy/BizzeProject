import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { FC, useState } from "react";
import { styles } from "./СategoriesBlock.styled";
import { categoryArray } from "./constants";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";
import { ICategoriesBlockProps } from "./typed";

export const CategoriesBlock: FC<ICategoriesBlockProps> = ({
  onCategoryClick,
  activeCategory,
}) => {
  const [isMoreBtnClicked, setMoreBtnClicked] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const customWidthForCart = useMediaQuery("(max-width: 580px)");

  return (
    <Box sx={styles.blockWrapper(isLargeScreen)}>
      <Typography variant={"h3"} sx={styles.blockTitle}>
        Our Categories
      </Typography>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={{ xs: "20px", md: "16px", lg: "20px" }}
        sx={styles.categoriesWrapper}
      >
        {categoryArray
          .slice(
            0,
            customWidthForCart
              ? !isMoreBtnClicked
                ? 5
                : categoryArray.length
              : categoryArray.length,
          )
          .map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
              onClick={onCategoryClick}
              activeCategory={category.value === activeCategory ? "active" : ""}
            />
          ))}
      </Grid>
      {customWidthForCart && !isMoreBtnClicked && (
        <Box sx={styles.buttonBlock}>
          <Button
            className="primaryBlack"
            sx={styles.seeMoreBtn}
            onClick={() => setMoreBtnClicked(true)}
          >
            See More
          </Button>
        </Box>
      )}
    </Box>
  );
};
