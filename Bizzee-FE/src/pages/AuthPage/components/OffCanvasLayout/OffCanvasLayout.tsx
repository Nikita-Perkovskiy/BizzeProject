import React, { Suspense, useState, useEffect } from "react";
import { Box, Drawer } from "@mui/material";
import { styles } from "./OffCanvasLayout.styled";
import { OffCanvasHeader } from "../OffCanvasHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { useTypedDispatch } from "store";
import { logOutThunk } from "features/auth/actions";
import { useParams } from "react-router";
import { URL_PARAMS } from "./constants";

export const OffCanvasLayout = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { createNewPassword } = useParams();

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);

    if (createNewPassword === URL_PARAMS.CREATE_NEW_PASSWORD) {
      dispatch(logOutThunk());
      navigate(`${routes.auth.root}/${routes.auth.signin}`);
    } else if (isDrawerOpen) {
      navigate(routes.home);
    }
  };

  useEffect(() => {
    toggleDrawer();
  }, []);

  useEffect(() => {
    if (location.pathname === `${routes.auth.root}/${routes.auth.signin}`) {
      navigate(location.pathname);
      setIsDrawerOpen(true);
    }
  }, [location.pathname]);

  return (
    <Drawer
      anchor={isLargeScreen ? "top" : "left"}
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={styles.signUpLayout}
    >
      <OffCanvasHeader
        handleDrawerClose={toggleDrawer}
        handleDrawerBack={() => {
          dispatch(logOutThunk());
          navigate(-1);
        }}
      ></OffCanvasHeader>
      <Box>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Drawer>
  );
};
