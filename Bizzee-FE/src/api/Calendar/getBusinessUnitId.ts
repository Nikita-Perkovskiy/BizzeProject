import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE, IBusinessUnitId } from "api/constants";

export const getBusinessUnitId = async (
  id: number | null,
  params: IBusinessUnitId,
) => {
  const res = await apiClient.get(`${BUSINESS_UNIT_ROUTE}/${id}`, {
    params,
  });

  return res.data;
};
