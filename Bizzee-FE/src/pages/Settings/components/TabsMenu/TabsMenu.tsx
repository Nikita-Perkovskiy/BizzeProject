import React from "react";
import { ITabMenuProps } from "./types";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { styles } from "./TabsMenu.styled";

export const TabsMenu = ({ tabsConfig }: ITabMenuProps) => {
  const { pathname } = useLocation();

  const correctPath = pathname.split("/").pop();

  return (
    <Box sx={styles.tabsWrapper}>
      <Tabs
        sx={styles.tabs}
        value={correctPath}
        variant={"scrollable"}
        scrollButtons={false}
      >
        {tabsConfig.map((tab) => (
          <Tab
            sx={styles.tab}
            key={tab.to}
            label={<Typography sx={styles.tabName}>{tab.name}</Typography>}
            value={tab.to}
            component={NavLink}
            to={tab.to}
          />
        ))}
      </Tabs>
      <Divider sx={styles.divider} />
    </Box>
  );
};
