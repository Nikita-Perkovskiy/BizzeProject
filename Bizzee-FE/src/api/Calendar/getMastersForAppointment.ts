import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_MASTERS, IMastersForAppointment } from "api/constants";

export const getMastersForAppointment = async (
  businessUnitId: number,
  { procedureIds, datetime }: IMastersForAppointment,
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_MASTERS}/${businessUnitId}/appointment`,
    {
      params: {
        procedureIds,
        datetime,
      },
    },
  );

  return res.data;
};
