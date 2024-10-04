import { BUSINESS_UNIT_ROUTE } from "api/constants";
import { apiClient } from "lib/apiClient";
import { IUpdateWeekOfDays } from "pages/Settings/components/BusinessUnits/components/UnitsWorkingHours/types";

export const updateBusinessUnitsWorkingDays = async (
  businessUnitId: number,
  data: IUpdateWeekOfDays[],
) => {
  const res = await apiClient.post(
    `${BUSINESS_UNIT_ROUTE}/${businessUnitId}/week-days`,
    data,
  );
  return res.data;
};
