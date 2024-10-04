import { Box, List, ListItem } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { INavLinksProps } from "./NavLinksMenuTypes";

export const NavLinksMenu: FC<INavLinksProps> = ({ sx, menuItems }) => {
  return (
    <Box sx={sx.container}>
      <List sx={sx.list} disablePadding>
        {menuItems.map((item) => (
          <ListItem key={item.to} sx={sx.item} disablePadding>
            <Link to={item.to}>{item.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
