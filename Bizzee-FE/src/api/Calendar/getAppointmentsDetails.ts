import { apiClient } from "lib/apiClient";
import { APPOINTMENT_ROUTE } from "api/constants";

export const getAppointmentsDetails = async (
  id: number | null,
  param: { datetimeNow: string },
) => {
  const res = await apiClient.get(`${APPOINTMENT_ROUTE}/${id}/slot`, {
    params: param,
  });

  return res.data;
};
