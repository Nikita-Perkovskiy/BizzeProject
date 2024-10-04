import { routes } from "config/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route path={routes.about} element={<div>About page</div>} />
    </Routes>
  );
};
