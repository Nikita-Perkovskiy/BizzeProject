import { routes } from "config/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const FinancesRoutes = () => {
  return (
    <Routes>
      <Route path={routes.finances} element={<div>Finances page</div>} />
    </Routes>
  );
};
