import { ROLE_CONFIG } from "./roles";

export const addRole = (value: string): string | null => {
  const LOCATION_NAME = value.split("/").splice(-1).toString();
  return ROLE_CONFIG[LOCATION_NAME] || "";
};
