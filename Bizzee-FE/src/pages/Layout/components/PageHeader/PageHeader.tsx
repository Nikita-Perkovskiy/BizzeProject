import React, { FC } from "react";
import { Box, Container } from "@mui/material";
import { Logo } from "../Logo";
import { SignInBtn } from "../SignInBtn";
import { MyProfileBtn } from "../MyProfileBtn";
import { styles } from "./PageHeader.styled";
import { LocationSelect } from "../LocationSelect";
import { LanguageSelect } from "../LanguageSelect";
import { useSelector } from "react-redux";
import { selectToken } from "features/selectors/authSelectors";
import { useLocation } from "react-router-dom";
import { routes } from "config/routes";
import useMediaQuery from "@mui/material/useMediaQuery";

export const PageHeader: FC = () => {
  const isLoggedIn = useSelector(selectToken);
  const location = useLocation();
  const homeRoute = [routes.home];
  const excludedRoutes = [
    routes.landing.root,
    routes.landing.units,
    routes.landing.unitId,
  ];
  const isLandingHeader =
    homeRoute.includes(location.pathname) ||
    excludedRoutes.some((route) =>
      location.pathname.startsWith(route as string),
    );
  const isTabletScreen = useMediaQuery("(min-width: 768px)");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <Box
      sx={styles.contentWrapperStyles(
        isTabletScreen,
        isLargeScreen,
        isLandingHeader,
      )}
      component="header"
    >
      <Container>
        <Box sx={styles.headerSectionStyles(isLandingHeader)}>
          <Logo />
          <Box sx={styles.personalizationBoxStyles}>
            {!isLandingHeader && <LocationSelect />}
            <LanguageSelect />
          </Box>
          <Box>{isLoggedIn ? <MyProfileBtn /> : <SignInBtn />}</Box>
        </Box>
      </Container>
    </Box>
  );
};
