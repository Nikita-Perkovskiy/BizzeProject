import { apiClient } from "lib/apiClient";
import { BUSINESS_UNITS_APPOINTMENT, IBusyDays } from "api/constants";

export const getBusyDays = async (
  businessUnitId: number | null,
  { procedureId, masterId }: IBusyDays,
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNITS_APPOINTMENT}/${businessUnitId}/day`,
    {
      params: {
        procedureId,
        masterId,
      },
    },
  );

  return res.data;
};
