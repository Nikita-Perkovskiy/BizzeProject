import React, { FC } from "react";
import { Menu } from "@mui/material";
import { styles } from "./MyProfileMenu.styled";
import { IMyProfileMenuProps } from "./MyProfileMenuTypes";
import { myProfileMenuItems } from "config/myProfileMenuItems";
import { MyProfileMenuItem } from "../../../../components/MyProfileMenuItem/MyProfileMenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { MainModal } from "components/MainModal";
import { useTypedDispatch } from "store";
import { logOutThunk } from "features/auth/actions";

export const MyProfileMenu: FC<IMyProfileMenuProps> = ({
  anchorEl,
  openMenu,
  menuClose,
  handleMenu,
  modalClose,
  openModal,
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const menuItems = myProfileMenuItems(isMobile);
  const navigate = useNavigate();

  const handleClick = (isLogout: boolean, path: string) => {
    !isLogout && navigate(path);
    handleMenu(isLogout);
  };

  const dispatch = useTypedDispatch();

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
        zIndex={1650}
      />
    </Menu>
  );
};
