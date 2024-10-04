import { apiClient } from "lib/apiClient";
import { IUpdateStatus, STAFF_STATUS } from "../constants";

export const updateMasterStatus = async (credentials: IUpdateStatus) => {
  const res = await apiClient.patch(`${STAFF_STATUS}`, credentials);

  return res.data;
};
