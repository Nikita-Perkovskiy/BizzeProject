import { apiClient } from "lib/apiClient";
import { IGetProceduresMasters, MASTER_PROCEDURES } from "../constants";

export const getProceduresMasters = async (
  id: number,
  params?: IGetProceduresMasters,
) => {
  const res = await apiClient.get(`${MASTER_PROCEDURES}/${id}`, {
    params: params,
  });
  return res.data;
};
