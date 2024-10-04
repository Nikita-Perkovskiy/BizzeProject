import { apiClient } from "lib/apiClient";
import { IRefreshToken, TOKEN_REFRESH_ROUTE } from "../constants";

export const refreshAccessToken = async (credentials: IRefreshToken) => {
  const res = await apiClient.post(TOKEN_REFRESH_ROUTE, credentials);

  return res.data;
};
