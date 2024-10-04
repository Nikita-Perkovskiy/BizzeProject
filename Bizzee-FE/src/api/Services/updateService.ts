import { apiClient } from "lib/apiClient";
import { IUserProfile, PROCEDURES } from "../constants";

export const updateService = async (
  credentials: IUserProfile,
  id: number | null,
) => {
  const res = await apiClient.put(`${PROCEDURES}/${id}`, credentials);

  return res.data;
};
