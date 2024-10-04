import { apiClient } from "lib/apiClient";
import { PROCEDURES } from "../constants";

export const getProceduresDuration = async () => {
  const res = await apiClient.get(`${PROCEDURES}/duration`);

  return res.data;
};
