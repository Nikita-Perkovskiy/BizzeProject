import { v4 as uuidv4 } from "uuid";
import { DEFAULT_CURRENCY } from "config/constants";

export const InitialValues = {
  category: "",
  title: "",
  description: "",
  location: "",
  priceType: "",
  priceMin: "",
  priceMax: "",
  price: "",
  currency: DEFAULT_CURRENCY,
  duration: "",
  additionalServiceDtos: [],
  businessUnitsId: [],
};

export const serviceLocationInitialOptions = [
  { title: "At Business Unit", value: "AT_BUSINESS_UNIT", id: uuidv4() },
  { title: "At Client’s Place", value: "AT_CLIENT_PLACE", id: uuidv4() },
  { title: "Both", value: "BOTH", id: uuidv4() },
];

export const priceTypeInitialOptions = [
  { title: "Free", value: "FREE", id: uuidv4() },
  { title: "From", value: "FROM", id: uuidv4() },
  { title: "Custom pricing", value: "CUSTOM_PRICING", id: uuidv4() },
  { title: "Fixed", value: "FIXED", id: uuidv4() },
];

export const servicesInitialData = [
  {
    title: "",
    price: "",
    id: uuidv4(),
  },
];
