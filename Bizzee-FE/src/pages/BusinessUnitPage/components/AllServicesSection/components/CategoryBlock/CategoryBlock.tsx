import { Box, Divider, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./CategoryBlock.styled";
import { CategoryType } from "../../types";
import { useTypedDispatch } from "store";
import { setActiveServicesCategory } from "features/businessUnit/actions";
import { useSelector } from "react-redux";
import {
  selectActiveServicesCategory,
  selectBusinessUnitCategory,
} from "features/selectors/businessUnitSelectors";
import { motion } from "framer-motion";

export const CategoryBlock = () => {
  const dispatch = useTypedDispatch();
  const activeCategory = useSelector(selectActiveServicesCategory);
  const allCategory = useSelector(selectBusinessUnitCategory);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [widthContainer, setWidthContainer] = useState(false);

  useEffect(() => {
    if (allCategory.length) {
      dispatch(setActiveServicesCategory(allCategory[0].title));
    }
  }, [allCategory]);
  const listWidth = allCategory.length * 160;
  useEffect(() => {
    if (containerRef.current && !widthContainer) {
      setWidthContainer(listWidth > containerRef.current.clientWidth);
    }
  }, [containerRef.current?.clientWidth]);

  const handleClick = (category: CategoryType) => {
    dispatch(setActiveServicesCategory(category.title));
  };
  return (
    <Box sx={styles.blockWrapper} ref={containerRef}>
      <Box sx={styles.categoryList}>
        <motion.div
          ref={listRef}
          drag={widthContainer ? "x" : undefined}
          dragConstraints={{ left: -listWidth / 2, right: 0 }}
          style={styles.motionBlock}
        >
          {!allCategory.length
            ? Array.from({ length: 3 }).map((_, index) => (
                <Box key={index} sx={styles.titleBlock}>
                  <Skeleton sx={styles.skeletonTitle} variant="rectangular" />
                </Box>
              ))
            : allCategory.map((category, index) => (
                <Box
                  key={category.title}
                  onClick={() => handleClick(category)}
                  sx={
                    category.title === activeCategory
                      ? { ...styles.titleBlock, ...styles.titleBlockActive }
                      : styles.titleBlock
                  }
                >
                  <Typography sx={styles.titleText}>
                    {category.title}
                  </Typography>
                </Box>
              ))}
        </motion.div>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};
