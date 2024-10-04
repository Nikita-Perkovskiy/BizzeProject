import { apiClient } from "lib/apiClient";
import { IUserSignUp, BUSINESS_INFO_ROUTE } from "../constants";

export const signUpBusinessUser = async (credentials: IUserSignUp) => {
  const res = await apiClient.post(BUSINESS_INFO_ROUTE, credentials);

  return res.data;
};
