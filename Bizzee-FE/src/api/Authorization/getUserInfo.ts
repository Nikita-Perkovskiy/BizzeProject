import { apiClient } from "lib/apiClient";
import { USER_INFO_ROUTE } from "../constants";

export const getUserInfo = async (id: number) => {
  const res = await apiClient.get(`${USER_INFO_ROUTE}/${id}`);

  return res.data;
};
