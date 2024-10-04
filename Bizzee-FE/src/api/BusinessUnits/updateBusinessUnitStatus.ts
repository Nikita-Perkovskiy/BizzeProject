import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE, IUpdateBusinessUnitStatus } from "../constants";

export const updateBusinessUnitStatus = async (
  id: number,
  credentials: IUpdateBusinessUnitStatus,
) => {
  const res = await apiClient.put(
    `${BUSINESS_UNIT_ROUTE}/${id}/business-owner`,
    credentials,
  );

  return res.data;
};
