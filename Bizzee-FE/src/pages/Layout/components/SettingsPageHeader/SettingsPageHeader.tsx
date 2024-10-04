import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { styles } from "./SettingsPageHeader.styled";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { defineTitle } from "./constants";
import { ReactComponent as MenuIcon } from "assets/svg/icon_menu.svg";
import { ReactComponent as ArrowIcon } from "assets/svg/icon_chevron.svg";
import { routes } from "config/routes";
import { businessMenuConfig } from "pages/Settings/constants";
import { RoundIconButton } from "components/RoundIconButton";
import { CloseBtn } from "components/CloseBtn";

export const SettingsPageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const title = defineTitle(location.pathname);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const handleRedirect = () => {
    navigate(-1);
  };

  return (
    <Box component="header" sx={styles.header}>
      <Container>
        <Box sx={styles.headerContent}>
          <RoundIconButton
            icon={<ArrowIcon style={styles.arrowIcon} />}
            onClick={handleRedirect}
          />
          <Typography sx={styles.title}>{title}</Typography>
          <RoundIconButton
            icon={<MenuIcon width={20} height={20} />}
            onClick={toggleMenu}
          />
        </Box>
      </Container>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={styles.mobileMenu}
      >
        <CloseBtn handleClose={toggleMenu} sx={styles.closeButton} />
        <Typography sx={styles.menuName} variant="h1">
          Menu
        </Typography>
        <List disablePadding>
          {businessMenuConfig.map((item) => (
            <ListItem disablePadding key={item.to} sx={styles.listItem}>
              <NavLink
                to={`${routes.settings.root}/${item.to}`}
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
