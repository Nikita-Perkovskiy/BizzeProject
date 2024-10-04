import { apiClient } from "lib/apiClient";
import { PROCEDURES, IUpdateServicesStatus } from "../constants";

export const updateServicesStatus = async (
  credentials: IUpdateServicesStatus,
) => {
  const res = await apiClient.put(`${PROCEDURES}/activate`, credentials);

  return res.data;
};
