import { apiClient } from "lib/apiClient";
import { MASTER_CATEGORIES_ROUTE } from "../constants";

export const masterCategories = async () => {
  const res = await apiClient.get(MASTER_CATEGORIES_ROUTE);

  return res.data;
};
