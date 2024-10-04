import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { CategoryButtons } from "../CategoryButtons/CategoryButtons";
import { styles } from "./CategoriesMasters.styled";
import { useSelector } from "react-redux";
import {
  selectActiveMastersCategory,
  selectBusinessUnitCategory,
} from "features/selectors/businessUnitSelectors";
import { CategoryType } from "pages/BusinessUnitPage/components/AllServicesSection/types";
import { useTypedDispatch } from "store";
import { setActiveMastersCategory } from "features/businessUnit/actions";

export const CategoriesMasters = () => {
  const allCategory = useSelector(selectBusinessUnitCategory);
  const activeCategory = useSelector(selectActiveMastersCategory);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (allCategory.length) {
      dispatch(setActiveMastersCategory(allCategory[0].title));
    }
  }, [allCategory]);

  const handleClick = (category: CategoryType) => {
    dispatch(setActiveMastersCategory(category.title));
  };
  return (
    <Box sx={styles.sortButtonWrappers}>
      <CategoryButtons
        sortButtons={allCategory}
        activeButton={activeCategory}
        handleSort={handleClick}
      />
    </Box>
  );
};
