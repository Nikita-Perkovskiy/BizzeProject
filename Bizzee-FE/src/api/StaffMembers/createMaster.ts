import { apiClient } from "lib/apiClient";
import { MASTER_CREATE_ROUTE } from "../constants";

export const createMaster = async (credentials: FormData) => {
  const res = await apiClient.post(MASTER_CREATE_ROUTE, credentials);

  return res.data;
};
