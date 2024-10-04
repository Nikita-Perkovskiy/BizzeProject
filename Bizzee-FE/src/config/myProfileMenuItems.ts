import { ReactComponent as UserIconDesktop } from "assets/svg/my-profile_desktop.svg";
import { ReactComponent as UserIconMobile } from "assets/svg/my-profile_mobile.svg";
import { ReactComponent as SettingsIconDesktop } from "assets/svg/settings_desktop.svg";
import { ReactComponent as SettingsIconMobile } from "assets/svg/settings_mobile.svg";
import { ReactComponent as NotificationsIconDesktop } from "assets/svg/notifications_desktop.svg";
import { ReactComponent as NotificationsIconMobile } from "assets/svg/notifications_mobile.svg";
import { ReactComponent as FaqIconDesktop } from "assets/svg/faq_desktop.svg";
import { ReactComponent as FaqIconMobile } from "assets/svg/faq_mobile.svg";
import { ReactComponent as AboutAppIconDesktop } from "assets/svg/about-app__desktop.svg";
import { ReactComponent as AboutAppIconMobile } from "assets/svg/about-app_mobile.svg";
import { ReactComponent as LogOutIconDesktop } from "assets/svg/log-out__desktop.svg";
import { ReactComponent as LogOutIconMobile } from "assets/svg/log-out_mobile.svg";
import { ReactComponent as LogOutIconTablet } from "assets/svg/logout_icon.svg";
import { ReactComponent as HelpIconTablet } from "assets/svg/help_icon.svg";
import { routes } from "./routes";

export const myProfileMenuItems = (isMobile: boolean) => [
  {
    iconType: isMobile ? UserIconMobile : UserIconDesktop,
    text: "My Profile",
    id: "myProfileMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isMobile ? SettingsIconMobile : SettingsIconDesktop,
    text: "Settings",
    id: "settingsMenuItem",
    isLogOut: false,
    to: routes.settings.root,
  },
  {
    iconType: isMobile ? NotificationsIconMobile : NotificationsIconDesktop,
    text: "Notifications",
    id: "notificationsMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isMobile ? FaqIconMobile : FaqIconDesktop,
    text: "FAQ",
    id: "faqMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isMobile ? AboutAppIconMobile : AboutAppIconDesktop,
    text: "About App",
    id: "aboutAppMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isMobile ? LogOutIconMobile : LogOutIconDesktop,
    text: "Log Out",
    id: "logOutMenuItem",
    isLogOut: true,
    to: routes.home,
  },
];

export const myProfileMenuItemsTablet = (isTablet: boolean) => [
  {
    iconType: isTablet ? UserIconDesktop : UserIconMobile,
    text: "My Profile",
    id: "myProfileMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isTablet ? SettingsIconDesktop : SettingsIconMobile,
    text: "Settings",
    id: "settingsMenuItem",
    isLogOut: false,
    to: routes.settings.root,
  },
  {
    iconType: isTablet ? HelpIconTablet : FaqIconMobile,
    text: "Help",
    id: "faqMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isTablet ? AboutAppIconDesktop : AboutAppIconMobile,
    text: "About App",
    id: "aboutAppMenuItem",
    isLogOut: false,
    to: routes.home,
  },
  {
    iconType: isTablet ? LogOutIconTablet : LogOutIconMobile,
    text: "Log Out",
    id: "logOutMenuItem",
    isLogOut: true,
    to: routes.home,
  },
];
