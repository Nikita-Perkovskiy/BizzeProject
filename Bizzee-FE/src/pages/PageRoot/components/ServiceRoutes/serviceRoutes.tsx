import { routes } from "config/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path={routes.service} element={<div>Service page</div>} />
    </Routes>
  );
};
