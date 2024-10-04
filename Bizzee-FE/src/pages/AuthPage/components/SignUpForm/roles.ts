import { routes } from "config/routes";
import { USER_ROLES } from "pages/PageRoot/components/constants";

export const ROLE_CONFIG: Record<string, string> = {
  [routes.auth.business]: USER_ROLES.BUSINESS_OWNER,
  [routes.auth.client]: USER_ROLES.CLIENT,
};
