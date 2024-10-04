import { apiClient } from "lib/apiClient";
import { IUpdateParam, PROCEDURES } from "../constants";

export const getServices = async (params?: IUpdateParam) => {
  const res = await apiClient.get(`${PROCEDURES}/business`, {
    params,
  });

  return res.data;
};
