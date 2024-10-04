import React, { FC } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./Logo.styled";
import { ILogoProps } from "./LogoTypes";
import { routes } from "config/routes";
import { ReactComponent as LogoIcon } from "assets/svg/logo_main.svg";

export const Logo: FC<ILogoProps> = () => {
  return (
    <Box sx={styles.logoWrapperStyles}>
      <Link to={routes.home}>
        <LogoIcon />
      </Link>
    </Box>
  );
};
