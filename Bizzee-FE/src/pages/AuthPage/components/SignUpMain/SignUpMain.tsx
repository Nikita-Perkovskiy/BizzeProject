import React, { FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet, useLocation } from "react-router-dom";
import { routes } from "config/routes";
import { TabletBanner } from "pages/AuthPage/components/TabletBanner/TabletBanner";
import { signupRoles } from "./constants";
import { RolePicker } from "../RolePicker";

export const SignUpMain: FC = () => {
  const location = useLocation();
  const isMediumScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 1919px)",
  );
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(
      location.pathname === `${routes.auth.root}/${routes.auth.signup}`,
    );
  }, [location]);

  useEffect(() => {
    signupRoles.forEach((role) => {
      if (location.pathname.includes(role)) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <Box>
      {isOpen && (
        <>
          {isMediumScreen && <TabletBanner />}
          <RolePicker setIsOpen={setIsOpen} />
        </>
      )}
      <Outlet />
    </Box>
  );
};
