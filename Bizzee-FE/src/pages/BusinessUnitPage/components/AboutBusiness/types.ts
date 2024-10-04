import { IValueTypes } from "api/constants";

export interface Links {
  facebook: string;
  instagram: string;
  website: string;
}

export interface IBusinessInfoSectionTypes {
  id: number;
  name: string;
  description: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  category: IValueTypes[];
  country: string;
  city: string;
  address: string;
  zipCode: string;
  links: Links;
  additionalServices: string[];
  tags: string[];
  imageLink: string;
  logoLink: string;
  status: boolean;
}
