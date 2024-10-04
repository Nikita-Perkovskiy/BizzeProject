import { BUSINESS_UNIT_ROUTE } from "api/constants";
import { apiClient } from "lib/apiClient";

export const getBusinessUnit = async (businessUnitId: number) => {
  const res = await apiClient.get(`${BUSINESS_UNIT_ROUTE}/${businessUnitId}`);

  return res.data;
};
