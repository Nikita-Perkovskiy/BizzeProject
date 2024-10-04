import { apiClient } from "lib/apiClient";
import { BUSINESS_UNIT_TAGS_ROUTE } from "../constants";

export const getBusinessUnitsTags = async () => {
  const res = await apiClient.get(BUSINESS_UNIT_TAGS_ROUTE);

  return res.data;
};
