import { apiClient } from "lib/apiClient";
import { MASTER_LANGUAGES_ROUTE } from "../constants";

export const masterLanguages = async () => {
  const res = await apiClient.get(MASTER_LANGUAGES_ROUTE);

  return res.data;
};
