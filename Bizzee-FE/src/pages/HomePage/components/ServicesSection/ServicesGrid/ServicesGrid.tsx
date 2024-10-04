import React from "react";
import { ServiceCard } from "components/ServiceCard";
import { Grid } from "@mui/material";
import { styles } from "./ServicesGrid.styled";
import { servicesInfo } from "../../../constants";

export const ServicesGrid = () => {
  return (
    <Grid container sx={styles.gridContainer}>
      {servicesInfo.map((service) => (
        <Grid item key={service.id} sx={styles.gridItem}>
          <ServiceCard serviceInfo={service} />
        </Grid>
      ))}
    </Grid>
  );
};
