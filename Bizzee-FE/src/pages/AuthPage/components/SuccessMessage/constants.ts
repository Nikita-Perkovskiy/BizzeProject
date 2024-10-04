import { routes } from "config/routes";
import { USER_ROLES } from "pages/PageRoot/components/constants";

export interface ISuccessMessageProps {
  successText: string;
  successButtonText: string;
  role?: string;
}

export const startPageByRole = {
  [USER_ROLES.BUSINESS_OWNER]: `${routes.settings.root}/${routes.settings.businessProfile}`,
  [USER_ROLES.CLIENT]: routes.calendar,
  [USER_ROLES.MASTER]: `${routes.auth.root}/${routes.auth.signin}`,
};
