import React, { FC } from "react";
import { ListItemIcon, Typography, MenuItem } from "@mui/material";
import { IMyProfileMenuItemProps } from "./MyProfileMenuItemTypes";

export const MyProfileMenuItem: FC<IMyProfileMenuItemProps> = ({
  icon: Icon,
  text,
  onClick,
  sx,
}) => {
  return (
    <MenuItem onClick={onClick} sx={sx}>
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <Typography variant="inherit">{text}</Typography>
    </MenuItem>
  );
};
