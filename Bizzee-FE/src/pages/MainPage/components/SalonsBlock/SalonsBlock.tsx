import { Box, Button, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { styles } from "./SalonsBlock.styled";
import { SalonCard } from "./components/SalonCard/SalonCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as IconAsc } from "assets/svg/icon_sort-asc.svg";
import { ReactComponent as IconDesc } from "assets/svg/icon_sort-desc.svg";
import { Title } from "components/Title/Title";
import { ISalonsBlockProps, IUnitData } from "./types";
import { getAllBusinessUnits } from "api/MainPage/getAllBusinessUnits";
import { useNotificationToast } from "hooks/useNotificationToast";
import { defaultTag } from "./constants";
import defaultImage from "../SalonsBlock/images/photo.jpg";
import { capitalizeFirstLetter } from "utils/capitalizeFirstLetter";

export const SalonsBlock: FC<ISalonsBlockProps> = ({ activeCategory }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const isDesktopScreen = useMediaQuery("(min-width: 1920px)");
  const [units, setUnits] = useState<IUnitData[]>([]);
  const [totalNumberOfUnits, setTotalNumberOfUnits] = useState<number>(0);
  const [unitsToSort, setUnitsToSort] = useState<number>(
    isDesktopScreen ? 6 : isMobileScreen ? 3 : 4,
  );
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(false);
  const [isDescSorting, setIsDescSorting] = useState<boolean>(false);

  const fetchData = async (
    sort: boolean = isDescSorting,
    unitsCount: number = unitsToSort,
  ) => {
    const params = {
      category: activeCategory,
      page: 0,
      size: unitsCount,
      sort: sort ? "name,desc" : "name,asc",
    };

    try {
      const unitsData = await getAllBusinessUnits(params);
      setUnits(unitsData.content);
      setTotalNumberOfUnits(unitsData.totalElements);
    } catch (error) {
      useNotificationToast({ type: "error" });
    }
  };

  useEffect(() => {
    fetchData();
  }, [isDesktopScreen, isMobileScreen, activeCategory]);

  const seeMoreBtnClickHandler = () => {
    setUnitsToSort(totalNumberOfUnits);
    setIsDisabledBtn(true);
    fetchData(isDescSorting, totalNumberOfUnits);
  };

  const sortBtnClickHandler = () => {
    setIsDescSorting(!isDescSorting);
    fetchData(!isDescSorting, unitsToSort);
  };

  return (
    <Box sx={styles.blockFon}>
      <Box sx={styles.blockWrapper(isLargeScreen)}>
        <Box sx={styles.titleWrapper}>
          <Title text="Masters And Salons" sx={styles.title} />
          <Button
            className="secondary"
            startIcon={isDescSorting ? <IconAsc /> : <IconDesc />}
            onClick={sortBtnClickHandler}
            sx={styles.sortBtn}
          >
            Name
          </Button>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          rowSpacing={isDesktopScreen ? 3 : isMobileScreen ? 4 : 2}
          columnSpacing={2}
          sx={styles.cardsWrapper}
        >
          {units.map((unit) => {
            const unitProcedures = unit.procedures
              .map((procedure) => {
                return capitalizeFirstLetter(procedure.title);
              })
              .join(", ");
            return (
              <SalonCard
                id={unit.id}
                key={unit.id}
                logo={unit.logoLink || defaultImage}
                image={unit.imageLink || defaultImage}
                tag={unit.tags.length ? unit.tags[0] : defaultTag}
                unitName={unit.name}
                services={unitProcedures}
                address={unit.address}
              />
            );
          })}
        </Grid>
        <Button
          sx={styles.seeMoreBtn(isDisabledBtn)}
          className="primaryBlack"
          onClick={seeMoreBtnClickHandler}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};
