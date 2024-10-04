import React, { FC } from "react";
import { ModalProps, SwipeableDrawer } from "@mui/material";
import { styles } from "./SwipeDrawer.styled";
import { ICalendarMobileMenu } from "./types";

export const SwipeDrawer: FC<ICalendarMobileMenu> = ({
  children,
  isOpen,
  toggleMenu,
  sx,
  className,
  anchor,
  disableBackdrop,
}) => {
  const menuStyles = {
    ...styles.drawer,
    ...sx,
  };

  const modalProps: Partial<ModalProps> = disableBackdrop
    ? {
        slots: { backdrop: "div" },
        slotProps: {
          root: {
            style: {
              position: "absolute",
              top: "unset",
              bottom: "unset",
              left: "unset",
              right: "unset",
            },
          },
        },
      }
    : {};

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={isOpen}
      onClose={toggleMenu}
      onOpen={toggleMenu}
      sx={menuStyles}
      className={className}
      ModalProps={modalProps}
    >
      {children}
    </SwipeableDrawer>
  );
};
