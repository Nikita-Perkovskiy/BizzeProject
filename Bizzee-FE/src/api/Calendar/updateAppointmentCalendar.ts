import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_APPOINTMENT, IAppointmentCalendar } from "../constants";

export const updateAppointmentCalendar = async (
  id: number | null,
  params: IAppointmentCalendar,
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_APPOINTMENT}/${id}/calendar`,
    { params: params },
  );

  return res.data;
};
