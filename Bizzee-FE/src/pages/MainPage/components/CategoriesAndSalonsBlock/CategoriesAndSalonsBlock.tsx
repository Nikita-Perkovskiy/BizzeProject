import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import { CategoriesBlock } from "../CategoriesBlock/СategoriesBlock";
import { SalonsBlock } from "../SalonsBlock/SalonsBlock";

export const CategoriesAndSalonsBlock = () => {
  const [isActiveCategory, setIsActiveCategory] = useState<string | null>(null);
  const SalonsBlockRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setIsActiveCategory(category);
    if (SalonsBlockRef.current) {
      SalonsBlockRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <CategoriesBlock
        onCategoryClick={handleCategoryClick}
        activeCategory={isActiveCategory}
      />
      <Box ref={SalonsBlockRef}>
        <SalonsBlock activeCategory={isActiveCategory} />
      </Box>
    </>
  );
};
