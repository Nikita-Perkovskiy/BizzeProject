import { apiClient } from "lib/apiClient";
import { IUserLogIn, USER_LOG_IN_ROUTE } from "../constants";

export const logInUser = async (credentials: IUserLogIn) => {
  const res = await apiClient.post(USER_LOG_IN_ROUTE, credentials);

  return res.data;
};
