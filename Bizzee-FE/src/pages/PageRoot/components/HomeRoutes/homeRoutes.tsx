import { routes } from "config/routes";
import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("pages/MainPage"));

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path={"*"}
        element={<Navigate to={routes.home} replace={true} />}
      />
    </Routes>
  );
};
