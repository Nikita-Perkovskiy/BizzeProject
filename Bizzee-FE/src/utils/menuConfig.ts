import {
  businessMenuConfig,
  masterMenuConfig,
} from "../pages/Settings/constants";
import { USER_ROLES } from "../pages/PageRoot/components/constants";
import { INavLink } from "components/SideMenu/constants";
import {
  tabletMenuItemsBusiness,
  tabletMenuItemsMaster,
} from "pages/Layout/components/TabletNavMenu/constants";

export const getMenuConfig = (
  role: (typeof USER_ROLES)[keyof typeof USER_ROLES],
  deviceType: "desktop" | "tablet" | "mobile",
): INavLink[] => {
  switch (role) {
    case USER_ROLES.BUSINESS_OWNER:
      if (deviceType === "tablet") {
        return tabletMenuItemsBusiness;
      } else {
        return businessMenuConfig;
      }
    case USER_ROLES.MASTER:
      if (deviceType === "tablet") {
        return tabletMenuItemsMaster;
      } else {
        return masterMenuConfig;
      }
    default:
      return [];
  }
};
