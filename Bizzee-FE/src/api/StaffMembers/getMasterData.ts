import { apiClient } from "lib/apiClient";
import { MASTER_ROUTE } from "../constants";

export const getMaster = async (id: number | null) => {
  const res = await apiClient.get(`${MASTER_ROUTE}/${id}`);

  return res.data;
};
