import { routes } from "config/routes";

const BUSINESS_HEADER_TITLE_CONFIG = {
  [routes.settings.appointments]: "Appointments",
  [routes.settings.clients.root]: "Clients",
  [routes.settings.businessProfile]: "Business profile",
  [routes.settings.units.root]: "Business units",
  [routes.settings.staff.root]: "Staff members",
  [routes.settings.services]: "Services",
};

export const defineTitle = (location: string): string | null => {
  const LOCATION_NAME = location.split("/")[2];
  return BUSINESS_HEADER_TITLE_CONFIG[LOCATION_NAME] || "";
};
