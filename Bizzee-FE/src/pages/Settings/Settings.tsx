import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./Settings.styled";
import { SideMenu } from "components/SideMenu";
import { getMenuConfig } from "utils/menuConfig";
import { useSelector } from "react-redux";
import { selectUserRole } from "features/selectors/authSelectors";

export const Profile = () => {
  const userRole = useSelector(selectUserRole);

  return (
    <Box component="section" sx={styles.section}>
      <Container>
        <Box sx={styles.wrapper}>
          <Box sx={styles.menuWrapper}>
            <Typography sx={styles.menuName} variant="h1">
              Menu
            </Typography>
            <SideMenu menuConfig={getMenuConfig(userRole, "desktop")} />
          </Box>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
