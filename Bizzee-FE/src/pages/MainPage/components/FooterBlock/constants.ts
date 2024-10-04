import { routes } from "config/routes";
import { formatPhoneNumber } from "utils";
import { ReactComponent as FacebookLogoIcon } from "assets/svg/logo_faceBook.svg";
import { ReactComponent as InstagramLogoIcon } from "assets/svg/logo_Instagram.svg";

export const pagesLink = [
  { title: "Categories", link: "" },
  { title: "Masters and Salons", link: "" },
  { title: "About BEZZEE", link: "" },
  { title: "Registration", link: "" },
];
export const documentationLinks = [
  { name: "Privacy Policy", to: routes.policy },
  { name: "Terms of Service", to: routes.service },
];
export const contactsLinks = [
  {
    name: "+48 724 663 000",
    to: `tel:${formatPhoneNumber("+48", "724663000")}`,
  },
  { name: "bizzeesupport@gmail.com", to: "mailto:bizzeesupport@gmail.com" },
];
export const mediaLine = [FacebookLogoIcon, InstagramLogoIcon];
