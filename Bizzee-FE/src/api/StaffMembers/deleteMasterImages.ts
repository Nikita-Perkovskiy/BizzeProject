import { apiClient } from "lib/apiClient";
import { MASTERS_PROCEDURES } from "../constants";

export const deleteMasterImages = async (id: number | null, param: string) => {
  const res = await apiClient.delete(
    `${MASTERS_PROCEDURES}/${id}?fileCategory=${param}`,
  );

  return res.data;
};
