import { apiClient } from "lib/apiClient";
import { IUpdateParam, MASTER_ROUTE } from "../constants";

export const updateStaffMembers = async (params: IUpdateParam) => {
  const res = await apiClient.get(`${MASTER_ROUTE}/search/staff-members`, {
    params,
  });

  return res.data;
};
