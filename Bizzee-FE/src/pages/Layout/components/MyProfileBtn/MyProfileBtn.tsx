import React, { FC, useState } from "react";
import { Button, Box, IconButton, Typography } from "@mui/material";
import { styles } from "./MyProfileBtn.styled";
import { MyProfileMenu } from "../MyProfileMenu";
import { MyProfileMenuMobile } from "../MyProfileMenuMobile";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as User } from "assets/svg/user_my-profile.svg";
import { ReactComponent as BurgerIcon } from "assets/svg/icon_menu.svg";
import { MyProfileMenuTablet } from "../MyProfileMenuTablet";

export const MyProfileBtn: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openMenu = Boolean(anchorEl);
  const menuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };
  const modalOpen = () => setOpenModal(true);
  const modalClose = () => setOpenModal(false);
  const handleMenu = (isLogOut: boolean): void => {
    isLogOut ? modalOpen() : menuClose();
  };
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  return (
    <Box>
      {isMobile ? (
        <Box>
          <IconButton onClick={toggleDrawer}>
            <User />
          </IconButton>
          <MyProfileMenuMobile
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
            handleMenu={handleMenu}
            modalClose={modalClose}
            openModal={openModal}
          />
        </Box>
      ) : isTablet ? (
        <Box>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenu}
            onClick={menuClick}
            sx={styles.myProfileBtn}
          >
            <BurgerIcon />
          </Button>
          <MyProfileMenuTablet
            anchorEl={anchorEl}
            openMenu={openMenu}
            menuClose={menuClose}
            handleMenu={handleMenu}
            modalClose={modalClose}
            openModal={openModal}
          />
        </Box>
      ) : (
        <Box>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenu}
            onClick={menuClick}
            sx={styles.myProfileBtn}
          >
            <User />
            <Typography sx={styles.myProfileTitle}>My Profile</Typography>
          </Button>
          <MyProfileMenu
            anchorEl={anchorEl}
            openMenu={openMenu}
            menuClose={menuClose}
            handleMenu={handleMenu}
            modalClose={modalClose}
            openModal={openModal}
          />
        </Box>
      )}
    </Box>
  );
};
