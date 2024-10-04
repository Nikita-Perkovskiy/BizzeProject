import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Drawer,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { styles } from "./TabletNavMenu.styled";
import { SideMenu } from "components/SideMenu";
import { v4 as uuidv4 } from "uuid";
import { getMenuConfig } from "utils/menuConfig";
import { useSelector } from "react-redux";
import { selectUserRole } from "features/selectors/authSelectors";
import { ReactComponent as CubeMenuIcon } from "assets/svg/cube_menu_icon.svg";

export const TabletNavMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const userRole = useSelector(selectUserRole);
  const menuConfig = getMenuConfig(userRole, "tablet");

  const handleCubeIconClick = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={isSideMenuOpen}
        hideBackdrop={false}
        onClose={handleCubeIconClick}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: "transparent" },
          },
        }}
        sx={{ ...styles.drawer, zIndex: "1700" }}
      >
        <IconButton
          sx={styles.menuIcon}
          onClick={handleCubeIconClick}
          disableRipple
        >
          <CubeMenuIcon />
        </IconButton>
        <Box sx={styles.sideMenu}>
          <Typography sx={styles.menuName} variant="h1">
            Menu
          </Typography>
          <SideMenu
            menuConfig={getMenuConfig(userRole, "desktop")}
            onClick={handleCubeIconClick}
          />
        </Box>
      </Drawer>
      <Paper sx={styles.menuContainer}>
        <BottomNavigation sx={styles.navWrapper}>
          {menuConfig.map((item) => (
            <BottomNavigationAction
              key={uuidv4()}
              icon={React.cloneElement(item.icon, {
                onClick: item.first ? handleCubeIconClick : undefined,
              })}
              to={item.to}
              LinkComponent={NavLink}
              sx={{
                ...styles.navLink,
                ...(item.first && styles.firstLink),
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};
