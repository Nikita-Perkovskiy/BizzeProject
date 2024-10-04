import React, { FC } from "react";
import { Menu } from "@mui/material";
import { styles } from "../MyProfileMenu/MyProfileMenu.styled";
import { IMyProfileMenuProps } from "../MyProfileMenu/MyProfileMenuTypes";
import { myProfileMenuItemsTablet } from "config/myProfileMenuItems";
import { MyProfileMenuItem } from "../../../../components/MyProfileMenuItem/MyProfileMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { MainModal } from "components/MainModal";
import { useTypedDispatch } from "store";
import { logOutThunk } from "features/auth/actions";

export const MyProfileMenuTablet: FC<IMyProfileMenuProps> = ({
  anchorEl,
  openMenu,
  menuClose,
  handleMenu,
  modalClose,
  openModal,
}) => {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const menuItems = myProfileMenuItemsTablet(isTablet);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const handleClick = (isLogout: boolean, path: string) => {
    if (!isLogout) {
      navigate(path);
    }
    handleMenu(isLogout);
  };

  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={openMenu}
      onClose={menuClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      sx={styles.myProfileMenu}
    >
      {menuItems.map((item) => (
        <MyProfileMenuItem
          key={item.id}
          icon={item.iconType}
          text={item.text}
          onClick={() => handleClick(item.isLogOut, item.to)}
          sx={{ ...styles.myProfileMenuItem, ...styles.myProfileMenuTablet }}
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
        zIndex={1650}
      />
    </Menu>
  );
};
