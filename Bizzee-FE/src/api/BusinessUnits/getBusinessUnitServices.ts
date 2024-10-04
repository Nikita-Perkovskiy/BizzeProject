import { apiClient } from "lib/apiClient";
import { PROCEDURES } from "../constants";

export const getBusinessUnitServices = async (id: number) => {
  const res = await apiClient.get(`${PROCEDURES}/business/${id}`);

  return res.data;
};
