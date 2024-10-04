import { apiClient } from "lib/apiClient";
import { IUpdateParam, MASTER_ROUTE } from "../constants";

export const updateBusinessUnitStaff = async (params: IUpdateParam) => {
  const res = await apiClient.get(`${MASTER_ROUTE}/search/business-unit`, {
    params,
  });
  return res.data;
};
