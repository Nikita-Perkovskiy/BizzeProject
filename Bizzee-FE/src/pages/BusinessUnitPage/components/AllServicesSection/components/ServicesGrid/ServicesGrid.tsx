import React, { FC } from "react";
import { styles } from "./ServicesGrid.styled";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { Grid, useMediaQuery } from "@mui/material";
import { IAllServicesTypes } from "../../types";
import { Skeletons } from "./component/Skeletons/Skeletons";

interface IServicesGridProps {
  services: IAllServicesTypes[] | [];
}
export const ServicesGrid: FC<IServicesGridProps> = ({ services }) => {
  const isSmallScreen = useMediaQuery("(max-width: 1145px)");
  return (
    <Grid container sx={styles.gridContainer} spacing={2.2}>
      {!services.length ? (
        <Skeletons />
      ) : (
        services.map((service: IAllServicesTypes) => (
          <Grid
            item
            key={service.procedureId}
            sx={styles.gridItem}
            xs={isSmallScreen ? 12 : 6}
          >
            <ServiceCard {...service} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
