import { apiClient } from "lib/apiClient";
import { ADD_MASTER_PROCEDURES } from "../constants";

export const createMasterServices = async (
  credentials: number[],
  id: number | null,
) => {
  const res = await apiClient.post(
    `${ADD_MASTER_PROCEDURES}/${id}`,
    credentials,
  );

  return res.data;
};
