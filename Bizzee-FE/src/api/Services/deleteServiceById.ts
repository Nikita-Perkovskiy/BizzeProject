import { apiClient } from "lib/apiClient";
import { PROCEDURES } from "../constants";

export const deleteServiceById = async (id: number) => {
  const res = await apiClient.delete(`${PROCEDURES}/${id}`);

  return res.data;
};
