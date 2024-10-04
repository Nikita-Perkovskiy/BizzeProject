import storage from "services/localStorage";
import { LOCAL_STORAGE_AUTH_KEY } from "config/constants";
import { ILoginPayload } from "features/auth/constants";

const getToken = () => {
  const authSavedInfo = storage.load(LOCAL_STORAGE_AUTH_KEY);
  if (authSavedInfo) {
    return authSavedInfo.token;
  }
};

const setToken = (token: string) => {
  const authSavedInfo = storage.load(LOCAL_STORAGE_AUTH_KEY);
  if (authSavedInfo) {
    storage.save(LOCAL_STORAGE_AUTH_KEY, { ...authSavedInfo, token });
  }
};

const getRefreshToken = () => {
  const authSavedInfo = storage.load(LOCAL_STORAGE_AUTH_KEY);
  if (authSavedInfo) {
    return authSavedInfo.refreshToken;
  }
};

const getUserId = () => {
  const authSavedInfo = storage.load(LOCAL_STORAGE_AUTH_KEY);
  if (authSavedInfo) {
    return authSavedInfo.id;
  }
};

const eraseUserInfo = () => {
  storage.remove(LOCAL_STORAGE_AUTH_KEY);
};

const saveTokens = ({ token, refreshToken, id }: ILoginPayload) => {
  storage.save(LOCAL_STORAGE_AUTH_KEY, { token, refreshToken, id });
};

const getAuthInfo = () => {
  const authSavedInfo = storage.load(LOCAL_STORAGE_AUTH_KEY);
  if (authSavedInfo) {
    return authSavedInfo;
  }
};

export const localStorageManager = {
  getToken,
  setToken,
  getRefreshToken,
  getUserId,
  eraseUserInfo,
  saveTokens,
  getAuthInfo,
};
