import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { styles } from "./MobileNavMenu.styled";
import { mobileMenuItems } from "./constants";

export const MobileNavMenu = () => {
  return (
    <Paper sx={styles.menuContainer}>
      <BottomNavigation sx={styles.navWrapper} showLabels>
        {mobileMenuItems.map((item) => (
          <BottomNavigationAction
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            LinkComponent={NavLink}
            sx={styles.navLink}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};
