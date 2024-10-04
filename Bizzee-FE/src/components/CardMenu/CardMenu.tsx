import React from "react";
import { Menu } from "@mui/material";
import { ICardMenuProps } from "./CardMenuTypes";
import { styles } from "./CardMenu.styled";
import { defaultProps } from "./constants";

export const CardMenu = ({
  open,
  anchorEl,
  onClick,
  children,
  sx,
  className,
  anchorReference,
  anchorPosition,
  transformOrigin = defaultProps.transformOrigin,
  anchorOrigin = defaultProps.anchorOrigin,
}: ICardMenuProps) => {
  const menuStyles = {
    ...styles.menu,
    ...sx,
  };

  return (
    <Menu
      anchorPosition={anchorPosition}
      anchorReference={anchorReference}
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClick}
      sx={menuStyles}
      transformOrigin={transformOrigin}
      anchorOrigin={anchorOrigin}
      className={className}
    >
      {children}
    </Menu>
  );
};
