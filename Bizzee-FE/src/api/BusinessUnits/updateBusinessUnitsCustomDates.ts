import { BUSINESS_UNIT_ROUTE } from "api/constants";
import { apiClient } from "lib/apiClient";
import { ICurrentCustomDatesDTO } from "pages/Settings/components/BusinessUnits/components/UnitsWorkingHours/types";

export const updateBusinessUnitsCustomDates = async (
  businessUnitId: number,
  data: ICurrentCustomDatesDTO[],
) => {
  const res = await apiClient.post(
    `${BUSINESS_UNIT_ROUTE}/${businessUnitId}/custom-dates`,
    data,
  );
  return res.data;
};
