import React, { FC } from "react";
import { MasterCard } from "../MasterCard/MasterCard";
import { Grid, useMediaQuery } from "@mui/material";
import { IMasterForBusinessUnit, IMastersGridProps } from "../../types";
import { styles } from "./MastersGrid.styled";
import { Skeletons } from "./component/Skeletons/Skeletons";

export const MastersGrid: FC<IMastersGridProps> = ({ mastersList }) => {
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <Grid container spacing={2} sx={styles.gridContainer}>
      {mastersList.length === 0
        ? Array.from({ length: 3 }).map((_, index) => (
            <Grid item key={index} xs={isSmallScreen ? 12 : 6}>
              <Skeletons />
            </Grid>
          ))
        : mastersList.map((master: IMasterForBusinessUnit) => (
            <Grid item key={master.userId} xs={isSmallScreen ? 12 : 6}>
              <MasterCard
                imageLink={master.imageLink}
                category={master.category}
                fullName={master.fullName}
              />
            </Grid>
          ))}
    </Grid>
  );
};
