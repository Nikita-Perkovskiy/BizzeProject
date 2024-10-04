import { DEFAULT_COUNTRY_CODE } from "config/constants";

export const initialValues = {
  description: "",
  fullName: "",
  experience: "",
  language: [],
  education: "",
  countryCode: DEFAULT_COUNTRY_CODE,
  phoneNumber: "",
  email: "",
  role: "",
  image: null,
  masterLogo: null,
  imageLink: "",
  masterLogoLink: "",
};

export const rolesData = [
  { title: "Admin", value: "ADMIN", disabled: true },
  { title: "Master", value: "MASTER", disabled: false },
  { title: "Staff", value: "STAFF", disabled: true },
];
