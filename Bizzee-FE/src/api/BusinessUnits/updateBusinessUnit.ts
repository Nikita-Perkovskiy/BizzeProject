import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE, IUpdateBusinessUnits } from "../constants";

export const updateBusinessUnits = async (params: IUpdateBusinessUnits) => {
  const res = await apiClient.get(BUSINESS_UNIT_ROUTE, { params });

  return res.data;
};
