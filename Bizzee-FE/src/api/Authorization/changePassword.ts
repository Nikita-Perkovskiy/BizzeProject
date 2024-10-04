import { apiClient } from "lib/apiClient";
import { IFormValues } from "../../pages/Layout/components/AuthInput/types";
import { USER_CHANGED_PASSWORD_ROUTE } from "../constants";

export const changePassword = async (credentials: IFormValues) => {
  const res = await apiClient.put(USER_CHANGED_PASSWORD_ROUTE, credentials);

  return res.data;
};
