import { routes } from "config/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const PolicyRoutes = () => {
  return (
    <Routes>
      <Route path={routes.policy} element={<div>Policy page</div>} />
    </Routes>
  );
};
