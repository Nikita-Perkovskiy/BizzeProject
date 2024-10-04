import React, { Suspense } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { TabsMenu } from "../TabsMenu";
import { styles } from "./SettingsOverview.styled";
import { ITabMenuProps } from "../TabsMenu/types";

export const SettingsOverview = ({ tabsConfig }: ITabMenuProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box>
        <TabsMenu tabsConfig={tabsConfig} />
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
