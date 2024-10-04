import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "pages/Settings/Settings.styled";
import { SideMenu } from "components/SideMenu";
import { businessMenuConfig } from "pages/Settings/constants";

const CalendarPage = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Container>
        <Box sx={styles.wrapper}>
          <Box sx={styles.menuWrapper}>
            <Typography sx={styles.menuName} variant="h1">
              Menu
            </Typography>
            <SideMenu menuConfig={businessMenuConfig} />
          </Box>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </Box>
  );
};

export default CalendarPage;
