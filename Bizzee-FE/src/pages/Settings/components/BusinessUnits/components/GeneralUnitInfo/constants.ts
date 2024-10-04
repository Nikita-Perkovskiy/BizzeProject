import { ReactComponent as FacebookIcon } from "assets/svg/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/svg/instagram.svg";
import { ReactComponent as WebsiteIcon } from "assets/svg/website.svg";

export const NAME_REGEX = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s,'-]+$/;
export const MAX_NAME_LENGTH = 64;
export const MAX_DESC_LENGTH = 1000;
export const MAX_FILE_SIZE = 5242880;
export const SUPPORTED_FILE_FORMATS = [
  "image/png",
  "image/jpeg",
  "image/svg+xml",
  "image/heic",
];
export const MAX_PHONE_LENGTH = 9;
export const MAX_ZIP_CODE_LENGTH = 6;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_REGEX = /^[0-9]*$/;
export const ZIP_CODE_REGEX = /^\d{2}-\d{3}$/;
export const URL_REGEX = /^(https?|chrome):\/\/[^\s$.?#].\S*$/;
export const MAX_INPUT_LENGTH = 64;

export const temporarySocialMedias = ["Social media", "link", "link"];

export const socialMediaLinks = [
  {
    title: "Facebook",
    icon: FacebookIcon,
    name: "facebook",
    placeholder: "https://www.facebook.com/example",
  },
  {
    title: "Instagram",
    icon: InstagramIcon,
    name: "instagram",
    placeholder: "https://www.instagram.com/example",
  },
  {
    title: "Website",
    icon: WebsiteIcon,
    name: "website",
    placeholder: "https://www.MyWebsite.com/example",
  },
];
