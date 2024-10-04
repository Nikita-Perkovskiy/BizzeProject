import { DEFAULT_COUNTRY_CODE } from "config/constants";

export const MAX_PHONE_LENGTH = 9;
export const EMAIL_REGEX =
  /^[a-zA-Z0-9][a-zA-Z0-9.-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const MAX_DESC_LENGTH = 200;

export const MIN_ENTERING_CHARACTERS = 4;

import { IFormValues } from "./ScheduleAppointmentTypes";

export const initialValues: IFormValues = {
  clientId: "",
  time: "",
  date: "",
  currency: "",
  price: "",
  specialRequests: "",
  master: "",
  email: "",
  name: "",
  countryCode: DEFAULT_COUNTRY_CODE,
  phone: "",
  procedure: "",
  duration: "",
};

export const notificationMenu = [
  {
    id: 1,
    value: "none",
    title: "None",
  },
  {
    id: 2,
    value: "sms",
    title: "SMS",
  },
  {
    id: 3,
    value: "email",
    title: "Email",
  },
  {
    id: 4,
    value: "sms&email",
    title: "SMS & Email",
  },
];

export const appointmentStatuses = [
  {
    id: 0,
    value: "CONFIRMED",
    title: "Confirmed",
  },
  {
    id: 1,
    value: "ABSENT",
    title: "Absent",
  },
  {
    id: 2,
    value: "COMPLETED",
    title: "Completed",
  },
];
