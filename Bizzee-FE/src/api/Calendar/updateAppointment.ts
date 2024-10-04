import { apiClient } from "lib/apiClient";
import { APPOINTMENT_ROUTE, IUpdateAppointment } from "../constants";

export const updateAppointment = async (
  appointmentId: number | null,
  params: IUpdateAppointment,
) => {
  const res = await apiClient.put(
    `${APPOINTMENT_ROUTE}/${appointmentId}/edit`,
    params,
  );

  return res.data;
};
