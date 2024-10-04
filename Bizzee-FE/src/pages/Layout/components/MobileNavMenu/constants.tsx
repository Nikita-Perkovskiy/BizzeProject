import React from "react";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar.svg";
import { ReactComponent as ServicesIcon } from "assets/svg/services-icon.svg";
import { ReactComponent as FinanceIcon } from "assets/svg/icon_finance.svg";
import { ReactComponent as SettingsIcon } from "assets/svg/icon_settings.svg";
import { routes } from "config/routes";

export const mobileMenuItems = [
  {
    icon: <CalendarIcon />,
    to: routes.calendar,
    label: "Calendar",
  },
  {
    icon: <ServicesIcon />,
    to: routes.services,
    label: "Services",
  },
  {
    icon: <FinanceIcon />,
    to: routes.finances,
    label: "Finances",
  },
  {
    icon: <SettingsIcon />,
    to: routes.settings.root,
    label: "Settings",
  },
];
