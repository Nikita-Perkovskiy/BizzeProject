import { apiClient } from "lib/apiClient";
import { PROCEDURES } from "../constants";

export const getServiceById = async (id: number) => {
  const res = await apiClient.get(`${PROCEDURES}/${id}`);

  return res.data;
};
