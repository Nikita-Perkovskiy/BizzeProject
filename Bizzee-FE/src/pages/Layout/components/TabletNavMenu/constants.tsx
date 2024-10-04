import React from "react";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar.svg";
import { ReactComponent as ServicesIcon } from "assets/svg/services-icon.svg";
import { ReactComponent as BusinessUnitIcon } from "assets/svg/business_units_icon.svg";
import { ReactComponent as ClientsIcon } from "assets/svg/clients_icon.svg";
import { ReactComponent as BusinessProfileIcon } from "assets/svg/business_profile_icon.svg";
import { ReactComponent as StaffMembersIcon } from "assets/svg/staff_members_icon.svg";
import { ReactComponent as CubeMenuIcon } from "assets/svg/cube_menu_icon.svg";
import { routes } from "config/routes";
import { generatePath } from "utils/generatePathRoute";

export const tabletMenuItemsBusiness = [
  {
    icon: <CubeMenuIcon />,
    first: true,
  },
  {
    icon: <CalendarIcon />,
    to: routes.calendar,
  },
  {
    icon: <ClientsIcon />,
    to: generatePath(routes.settings.root, routes.settings.clients.root),
  },
  {
    icon: <BusinessProfileIcon />,
    to: generatePath(routes.settings.root, routes.settings.businessProfile),
  },
  {
    icon: <BusinessUnitIcon />,
    to: generatePath(routes.settings.root, routes.settings.units.root),
  },
  {
    icon: <StaffMembersIcon />,
    to: generatePath(routes.settings.root, routes.settings.staff.root),
  },
  {
    icon: <ServicesIcon />,
    to: routes.services,
  },
];

export const tabletMenuItemsMaster = [
  {
    icon: <CubeMenuIcon />,
    first: true,
  },
  {
    icon: <CalendarIcon />,
    to: routes.calendar,
  },
  {
    icon: <ClientsIcon />,
    to: generatePath(routes.settings.root, routes.settings.clients.root),
  },
  {
    icon: <BusinessProfileIcon />,
    to: generatePath(routes.settings.root, routes.settings.businessProfile),
  },
  {
    icon: <ServicesIcon />,
    to: routes.services,
  },
];
