import { apiClient } from "lib/apiClient";
import { BUSINESS_INFO_ROUTE, IBusinessUpdate } from "../constants";

export const updateBusinessProfile = async (credentials: IBusinessUpdate) => {
  const res = await apiClient.put(BUSINESS_INFO_ROUTE, credentials);

  return res.data;
};
