import { BUSINESS_UNIT_ROUTE } from "api/constants";
import { apiClient } from "lib/apiClient";

export const getBusinessUnitsWorkingDays = async (businessUnitId: number) => {
  const res = await apiClient.get(
    `${BUSINESS_UNIT_ROUTE}/${businessUnitId}/week-days`,
  );
  return res.data;
};
