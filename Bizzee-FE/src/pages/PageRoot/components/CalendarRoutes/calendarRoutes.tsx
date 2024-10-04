import { routes } from "config/routes";
import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";

const Appointments = lazy(() =>
  import("pages/Settings/components/Appointments").then((module) => ({
    default: module.Appointments,
  })),
);

const CalendarPage = lazy(() => import("pages/CalendarPage"));

export const CalendarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />}>
        <Route
          index
          element={<Navigate to={routes.settings.appointments} replace />}
        />
        <Route
          path={routes.settings.appointments}
          element={
            <PrivateRoute>
              <Appointments />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
