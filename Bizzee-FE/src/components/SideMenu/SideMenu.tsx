import React, { FC, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, List, ListItem, Slider } from "@mui/material";
import { ISideMenuProps } from "./constants";
import { styles } from "./SideMenu.styled";

export const SideMenu: FC<ISideMenuProps> = ({ menuConfig, onClick }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    menuConfig.forEach((item) => {
      if (location.pathname.includes(item.to as string)) {
        setSliderPosition(item.sliderPosition as number);
      }
    });
  }, [location.pathname]);

  return (
    <Box sx={styles.menuWrapper}>
      <List disablePadding sx={styles.menuList}>
        {menuConfig.map((item) => (
          <ListItem
            key={item.to}
            disablePadding
            sx={styles.menuLink}
            onClick={onClick}
          >
            <NavLink to={item.to as string} className="progressMenu">
              {item.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Slider
        sx={styles.slider}
        orientation="vertical"
        track="inverted"
        defaultValue={100}
        value={sliderPosition}
        min={0}
        max={100}
        size="small"
        disabled={true}
      />
    </Box>
  );
};
