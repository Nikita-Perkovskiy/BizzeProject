import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_CATEGORIES_ROUTE } from "../constants";

export const getBusinessUnitsCategories = async () => {
  const res = await apiClient.get(BUSINESS_UNIT_CATEGORIES_ROUTE);

  return res.data;
};
