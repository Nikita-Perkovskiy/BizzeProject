import React, { Suspense, FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageHeader } from "./components/PageHeader";
import { MobileNavMenu } from "./components/MobileNavMenu";
import { Typography, useMediaQuery } from "@mui/material";
import { SettingsPageHeader } from "./components/SettingsPageHeader";
import { useSelector } from "react-redux";
import { selectSuccessMessage } from "features/selectors/authSelectors";
import { styles } from "./Layout.styled";
import { useLocationScrollToTop } from "hooks/useLocationScrollToTop";
import { selectToken } from "features/selectors/authSelectors";
import { TabletNavMenu } from "./components/TabletNavMenu";
import { routes } from "config/routes";

export const Layout: FC = () => {
  useLocationScrollToTop();

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const successMessage = useSelector(selectSuccessMessage);
  const isLoggedIn = useSelector(selectToken);
  const location = useLocation();

  const header =
    isMobile && isLoggedIn ? <SettingsPageHeader /> : <PageHeader />;

  const navMenu =
    isTablet && isLoggedIn ? <TabletNavMenu /> : <MobileNavMenu />;

  const homeRoute = [routes.home];
  const excludedRoutes = [
    routes.landing.root,
    routes.landing.units,
    routes.landing.unitId,
  ];

  return (
    <>
      {header}
      {successMessage && (
        <Typography sx={styles.successMessage}>{successMessage}</Typography>
      )}
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {!(
        homeRoute.includes(location.pathname) ||
        excludedRoutes.some((route) =>
          location.pathname.startsWith(route as string),
        )
      ) && navMenu}
    </>
  );
};
