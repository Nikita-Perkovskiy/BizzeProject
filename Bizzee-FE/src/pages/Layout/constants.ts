import { routes } from "config/routes";

export const languageOptions = ["EN", "PL"];
export const cityOptions = ["Warsaw", "Poznan", "Cracow"];
export const footerSupportMenuItems = [
  {
    name: "Support: bizzeesupport@gmail.com",
    to: "mailto:bizzeesupport@gmail.com",
  },
  { name: "Privacy Policy", to: routes.policy },
  { name: "Terms of Service", to: routes.service },
];
export const footerMenuItems = [
  { name: "about us", to: routes.about },
  { name: "contacts", to: routes.contacts },
  { name: "how it works", to: routes.howitworks },
];

export const EMAIL_TYPE = "email";
export const TEXT_TYPE = "text";
export const NAME_TYPE = "name";
export const TRIMED_VALUE = /\s+/g;
