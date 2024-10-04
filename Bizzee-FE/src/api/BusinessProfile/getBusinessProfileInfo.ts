import { apiClient } from "lib/apiClient";
import { BUSINESS_USER_INFO_ROUTE } from "../constants";

export const getBusinessProfileInfo = async (userId: number) => {
  const res = await apiClient.get(`${BUSINESS_USER_INFO_ROUTE}/${userId}`);

  return res.data;
};
