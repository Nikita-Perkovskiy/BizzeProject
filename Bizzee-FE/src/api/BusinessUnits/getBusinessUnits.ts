import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE } from "../constants";

export const getBusinessUnits = async () => {
  const res = await apiClient.get(BUSINESS_UNIT_ROUTE);

  return res.data;
};
