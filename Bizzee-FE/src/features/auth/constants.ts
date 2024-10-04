import { localStorageManager } from "lib/localStorageManager";

const authInfo = localStorageManager.getAuthInfo();

export const initialState: IAuthState = {
  isLoading: false,
  token: authInfo?.token || "",
  refreshToken: authInfo?.refreshToken || "",
  id: authInfo?.id || null,
  name: "",
  email: "",
  countryCode: "",
  phoneNumber: "",
  country: "",
  city: "",
  address: "",
  zipCode: "",
  role: "",
  status: "",
  error: {
    general: "",
    response: "",
  },
  isSuccess: false,
  successRequestMessage: "",
};

export interface IAuthState {
  isLoading: boolean;
  token: string;
  refreshToken: string;
  id: number | null;
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
  role: string;
  status: string;
  error: {
    general: string;
    response?: string | number;
  };
  isSuccess: boolean;
  successRequestMessage: string;
}

export enum AuthActionTypes {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  FULFILLED = "FULFILLED",
  SIGNUP = "SIGNUP",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  GET_USER_INFO = "GET_USER_INFO",
  GET_BUSINESS_INFO = "GET_BUSINES_INFO",
  SET_IS_SUCCESS = "SET_IS_SUCCESS",
}

export interface IPendingAction {
  type: AuthActionTypes.PENDING;
}

export interface IRejectedAction {
  type: AuthActionTypes.REJECTED;
  payload: {
    general: string;
    response?: string | number;
  };
}

export interface IFulfilledAction {
  type: AuthActionTypes.FULFILLED;
}

export interface ISignUpAction {
  type: AuthActionTypes.SIGNUP;
}

export interface ILoginPayload {
  token: string;
  refreshToken: string;
  id: number;
  role: string;
  status: string;
}

export interface ILoginAction {
  type: AuthActionTypes.LOGIN;
  payload: ILoginPayload;
}

export interface ILogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export interface IUserInfoPayload {
  id: number;
  email: string;
  role: string;
  status: string;
}

export interface IBusinessInfoPayload extends IUserInfoPayload {
  name: string;
  countryCode: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
}

export interface IGetUserInfoAction {
  type: AuthActionTypes.GET_USER_INFO;
  payload: IUserInfoPayload;
}

export interface IGetBusinessInfoAction {
  type: AuthActionTypes.GET_BUSINESS_INFO;
  payload: IBusinessInfoPayload;
}

export interface ISetIsSuccessAction {
  type: AuthActionTypes.SET_IS_SUCCESS;
  payload: boolean;
}

export type AuthAction =
  | IPendingAction
  | IRejectedAction
  | IFulfilledAction
  | ILoginAction
  | ILogoutAction
  | IGetUserInfoAction
  | ISetIsSuccessAction
  | IGetBusinessInfoAction;
