import { routes } from "config/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const HowitworksRoutes = () => {
  return (
    <Routes>
      <Route path={routes.howitworks} element={<div>How it works page</div>} />
    </Routes>
  );
};
