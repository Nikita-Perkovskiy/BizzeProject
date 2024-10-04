import { IFormValues } from "pages/Settings/components/Appointments/components/ScheduleAppointment/ScheduleAppointmentTypes";
import { DEFAULT_COUNTRY_CODE } from "config/constants";

export const initialValues: IFormValues = {
  name: "",
  countryCode: DEFAULT_COUNTRY_CODE,
  phoneNumber: "",
  email: "",
  city: "",
  notes: "",
  status: "NEW",
  dateOfBirth: "",
};

export const MIN_ALLOWED_PAST_DATE = 100;
export const MAX_ALLOWED_PAST_DATE = 18;
