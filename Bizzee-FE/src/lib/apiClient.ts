/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { localStorageManager } from "lib/localStorageManager";
import { refreshAccessToken } from "api/Authorization/refreshAccessToken";
import {
  BUSINESS_INFO_ROUTE,
  CLIENT_ROUTE,
  TOKEN_REFRESH_ROUTE,
  USER_LOG_IN_ROUTE,
  USER_SIGN_UP_ROUTE,
} from "api/constants";
import store from "store";
import { logOutAction } from "features/auth/actions";
import {
  accessTokenExpiredMessage,
  deletedTokenErrorMessage,
  serverError500,
} from "config/constants";

const urlSkipAuth = [
  USER_LOG_IN_ROUTE,
  USER_SIGN_UP_ROUTE,
  TOKEN_REFRESH_ROUTE,
  CLIENT_ROUTE,
  BUSINESS_INFO_ROUTE,
];

// Create basic configuration for request. URL taken from .env file.
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Set required authorization header for requests.
apiClient.interceptors.request.use((config: any) => {
  if (
    config.url &&
    config.method === "post" &&
    urlSkipAuth.includes(config.url)
  ) {
    return config;
  }

  const token = localStorageManager.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    // Handle if user session has expired force user to go to the Login page.
    const originalConfig = err.config;

    if (
      err?.response?.status === serverError500 &&
      err?.response?.data?.message?.includes(deletedTokenErrorMessage)
    ) {
      store.dispatch(logOutAction());
      localStorageManager.eraseUserInfo();
    }

    if (
      err?.response?.status === 403 &&
      err?.response?.data === accessTokenExpiredMessage &&
      !err._isRetry
    ) {
      originalConfig._isRetry = true;
      try {
        const refreshToken = localStorageManager.getRefreshToken();
        const userInfo = await refreshAccessToken({
          refreshToken,
        });
        localStorageManager.setToken(userInfo.token);
        originalConfig.headers["Authorization"] = `Bearer ${userInfo.token}`;
        return apiClient.request(originalConfig);
      } catch (error) {
        store.dispatch(logOutAction());
        localStorageManager.eraseUserInfo();
      }
    }

    return Promise.reject(err);
  },
);

export { apiClient };
