import { apiClient } from "lib/apiClient";
import { IUserSignUp, CLIENT_ROUTE } from "../constants";

export const signUpClientUser = async (credentials: IUserSignUp) => {
  const res = await apiClient.post(CLIENT_ROUTE, credentials);

  return res.data;
};
