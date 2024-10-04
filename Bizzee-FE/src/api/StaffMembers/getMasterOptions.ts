import { apiClient } from "lib/apiClient";
import { MASTER_ROUTE } from "../constants";

export const getMasterOptions = async (id: number) => {
  const res = await apiClient.get(`${MASTER_ROUTE}/${id}/categories`);

  return res.data;
};
