import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_APPOINTMENT, ITimeForAppointment } from "api/constants";

export const getTimeForAppointment = async (
  businessUnitId: number | null,
  { masterId, procedureId, date }: ITimeForAppointment,
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_APPOINTMENT}/${businessUnitId}/time`,
    {
      params: {
        masterId,
        procedureId,
        date,
      },
    },
  );

  return res.data;
};
