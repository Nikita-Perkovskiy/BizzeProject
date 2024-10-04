import { IFormValues } from "./GeneralUnitInfoTypes";
import { DEFAULT_COUNTRY, DEFAULT_COUNTRY_CODE } from "config/constants";

export const initialValues: IFormValues = {
  userId: "",
  image: "",
  logo: "",
  name: "",
  description: "",
  countryCode: DEFAULT_COUNTRY_CODE,
  phoneNumber: "",
  email: "",
  category: "",
  country: DEFAULT_COUNTRY,
  city: "",
  address: "",
  zipCode: "",
  facebook: "",
  instagram: "",
  website: "",
  additionalServices: "",
  tags: "",
};
