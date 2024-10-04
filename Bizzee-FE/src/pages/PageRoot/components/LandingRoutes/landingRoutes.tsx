import { routes } from "config/routes";
import { BusinessUnitPage } from "pages/BusinessUnitPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { FoundSalonsBlock } from "../../../MainPage/components/FoundSalonsBlock/FoundSalonsBlock";

export const LandingRoutes = () => {
  return (
    <Routes>
      <Route path={`${routes.landing.unitId}`} element={<BusinessUnitPage />} />
      <Route
        path={`${routes.landing.units.root}`}
        element={<FoundSalonsBlock />}
      />
    </Routes>
  );
};
