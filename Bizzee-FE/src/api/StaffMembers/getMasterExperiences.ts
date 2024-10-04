import { apiClient } from "lib/apiClient";
import { MASTER_EXPERIENCES_ROUTE } from "../constants";

export const masterExperiences = async () => {
  const res = await apiClient.get(MASTER_EXPERIENCES_ROUTE);

  return res.data;
};
