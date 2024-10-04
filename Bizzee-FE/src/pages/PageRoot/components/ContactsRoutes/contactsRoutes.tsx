import { routes } from "config/routes";
import React from "react";
import { Route, Routes } from "react-router-dom";

export const ContactsRoutes = () => {
  return (
    <Routes>
      <Route path={routes.services} element={<div>Services page</div>} />
    </Routes>
  );
};
