import { apiClient } from "lib/apiClient";
import { MASTER_ROUTE } from "../constants";

export const updateMaster = async (
  credentials: FormData,
  id: number | null,
) => {
  const res = await apiClient.put(`${MASTER_ROUTE}/${id}`, credentials);

  return res.data;
};
