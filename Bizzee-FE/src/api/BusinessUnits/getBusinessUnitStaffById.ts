import { apiClient } from "lib/apiClient";
import { MASTERS_IN_BUSINESS_UNIT } from "../constants";

export const getBusinessUnitStaffById = async (id: number) => {
  const res = await apiClient.get(`${MASTERS_IN_BUSINESS_UNIT}/${id}`);

  return res.data;
};
