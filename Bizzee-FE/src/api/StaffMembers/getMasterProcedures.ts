import { apiClient } from "lib/apiClient";
import { MASTER_PROCEDURES } from "../constants";

export const getMasterProcedures = async (id: number) => {
  const res = await apiClient.get(`${MASTER_PROCEDURES}/${id}`);

  return res.data;
};
