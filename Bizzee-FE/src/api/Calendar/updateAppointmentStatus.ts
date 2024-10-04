import { apiClient } from "lib/apiClient";
import { APPOINTMENT_ROUTE, IUpdateAppointmentStatus } from "../constants";

export const updateAppointmentStatus = async (
  id: number | null,
  params: IUpdateAppointmentStatus,
) => {
  const res = await apiClient.put(
    `${APPOINTMENT_ROUTE}/${id}/changeStatus`,
    params,
  );

  return res.data;
};
