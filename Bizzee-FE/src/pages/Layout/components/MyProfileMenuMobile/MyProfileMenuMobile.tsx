import React, { FC } from "react";
import { Drawer, Box, Avatar, Typography } from "@mui/material";
import { styles } from "./MyProfileMenuMobile.styled";
import { IMyProfileMenuProps } from "./MyProfileMenuMobileTypes";
import { myProfileMenuItems } from "config/myProfileMenuItems";
import { MyProfileMenuItem } from "../../../../components/MyProfileMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as ChevronLeft } from "assets/svg/icon_chevron.svg";
import { useNavigate } from "react-router-dom";
import { MainModal } from "components/MainModal";
import { useTypedDispatch } from "store";
import { logOutThunk } from "features/auth/actions";

export const MyProfileMenuMobile: FC<IMyProfileMenuProps> = ({
  handleMenu,
  modalClose,
  openModal,
  isDrawerOpen,
  toggleDrawer,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const menuItems = myProfileMenuItems(isMobile);
  const navigate = useNavigate();

  const handleClick = (isLogout: boolean, path: string) => {
    handleMenu(isLogout);
    if (!isLogout) {
      navigate(path);
      toggleDrawer();
    }
  };

  const dispatch = useTypedDispatch();

  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={styles.myProfileMenu}
    >
      <Box sx={styles.chevronLeft}>
        <ChevronLeft
          style={{ transform: "rotate(90deg)" }}
          onClick={toggleDrawer}
        />
      </Box>
      <Box sx={styles.avatarWrapper}>
        <Avatar
          sx={styles.avatar}
          src={"link-to-user-image"}
          alt="User Avatar"
        />
        <Typography sx={styles.name}>User Name</Typography>
      </Box>
      {menuItems.map((item) => (
        <MyProfileMenuItem
          key={item.id}
          icon={item.iconType}
          text={item.text}
          onClick={() => handleClick(item.isLogOut, item.to)}
          sx={styles.myProfileMenuItem}
        />
      ))}
      <MainModal
        openModal={openModal}
        modalClose={modalClose}
        handleAction={handleLogout}
        titleMessage="Are you sure?"
        bodyMessage="You will no longer be logged in"
        buttonMessage="Log Out"
        secondBtnMessage="Cancel"
      />
    </Drawer>
  );
};
