import { apiClient } from "lib/apiClient";
import { MASTERS_IN_BUSINESS_UNIT } from "../constants";

export const getBusinessUnitStaff = async () => {
  const res = await apiClient.get(MASTERS_IN_BUSINESS_UNIT);

  return res.data;
};
