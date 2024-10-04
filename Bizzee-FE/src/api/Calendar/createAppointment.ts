import { apiClient } from "lib/apiClient";
import { APPOINTMENT_ROUTE, IAppointmentData } from "../constants";

export const createAppointment = async (appointmentData: IAppointmentData) => {
  const res = await apiClient.post(APPOINTMENT_ROUTE, appointmentData);

  return res.data;
};
