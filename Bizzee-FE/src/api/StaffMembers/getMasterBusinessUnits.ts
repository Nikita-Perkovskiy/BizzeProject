import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_ROUTE } from "../constants";

export const getMasterBusinessUnits = async (masterId: number) => {
  const res = await apiClient.get(`${BUSINESS_UNIT_ROUTE}/${masterId}/master`);

  return res.data;
};
