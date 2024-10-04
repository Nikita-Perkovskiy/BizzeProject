import { apiClient } from "lib/apiClient";
import { IUserProfile, PROCEDURES } from "../constants";

export const createProcedures = async (credentials: IUserProfile) => {
  const res = await apiClient.post(PROCEDURES, credentials);

  return res.data;
};
