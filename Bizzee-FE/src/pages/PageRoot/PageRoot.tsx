import React, { FC, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import { AuthRoutes } from "./components/AuthRoutes/authRoutes";
import { SettingRoutes } from "./components/SettingRoutes";
import { CalendarRoutes } from "./components/CalendarRoutes/calendarRoutes";
import { ServicesRoutes } from "./components/ServicesRoutes/servicesRoutes";
import { FinancesRoutes } from "./components/FinancesRoutes/financesRoutes";
import { AboutRoutes } from "./components/AboutRoutes/aboutRoutes";
import { ContactsRoutes } from "./components/ContactsRoutes/contactsRoutes";
import { HowitworksRoutes } from "./components/HowitworksRoutes/howitworksRoutes";
import { PolicyRoutes } from "./components/PolicyRoutes/policyRoutes";
import { ServiceRoutes } from "./components/ServiceRoutes";
import { Layout } from "pages/Layout";
import { HomeRoutes } from "./components/HomeRoutes";
import { LandingRoutes } from "./components/LandingRoutes";

export const PageRoot: FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="calendar/*" element={<CalendarRoutes />} />
        <Route path="services/*" element={<ServicesRoutes />} />
        <Route path="finances/*" element={<FinancesRoutes />} />
        <Route path="about/*" element={<AboutRoutes />} />
        <Route path="contacts/*" element={<ContactsRoutes />} />
        <Route path="howitworks/*" element={<HowitworksRoutes />} />
        <Route path="policy/*" element={<PolicyRoutes />} />
        <Route path="services/*" element={<ServiceRoutes />} />
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="settings/*" element={<SettingRoutes />} />
        <Route path="landing/*" element={<LandingRoutes />} />
      </Route>,
    ),
  );

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
      <ToastContainer
        limit={isMobile ? 2 : 3}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
        icon={false}
        autoClose={5000}
      />
    </Suspense>
  );
};
