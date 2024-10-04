import { BUSINESS_UNIT_ROUTE } from "api/constants";
import { apiClient } from "lib/apiClient";

export const getBusinessUnitsCustomDates = async (
  businessUnitId: number,
  date: string,
) => {
  const res = await apiClient.get(
    `${BUSINESS_UNIT_ROUTE}/${businessUnitId}/custom-dates?date=${date}`,
  );
  return res.data;
};
