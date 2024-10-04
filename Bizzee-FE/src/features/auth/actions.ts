import { TypedDispatch } from "store";
import { logOutUser } from "api/Authorization/userLogOut";
import { localStorageManager } from "lib/localStorageManager";
import {
  AuthActionTypes,
  IFulfilledAction,
  IGetUserInfoAction,
  ILoginAction,
  ILoginPayload,
  ILogoutAction,
  IPendingAction,
  IRejectedAction,
  ISignUpAction,
  IUserInfoPayload,
  IBusinessInfoPayload,
  IGetBusinessInfoAction,
} from "./constants";
import { logInUser } from "api/Authorization/userLogIn";
import { IUserLogIn } from "api/constants";
import { AnyAction } from "redux";
import { getUserInfo } from "api/Authorization/getUserInfo";
import { getBusinessProfileInfo } from "api/BusinessProfile/getBusinessProfileInfo";

export const pendingAction = (): IPendingAction => {
  return {
    type: AuthActionTypes.PENDING,
  };
};

export const rejectedAction = (payload: {
  general: string;
  response?: string | number;
  message?: string;
}): IRejectedAction => {
  return {
    type: AuthActionTypes.REJECTED,
    payload,
  };
};

export const fulfilledAction = (): IFulfilledAction => {
  return {
    type: AuthActionTypes.FULFILLED,
  };
};

export const signUpAction = (): ISignUpAction => {
  return {
    type: AuthActionTypes.SIGNUP,
  };
};

export const logInAction = (payload: ILoginPayload): ILoginAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload,
  };
};

export const logOutAction = (): ILogoutAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

export const userInfoAction = (
  payload: IUserInfoPayload,
): IGetUserInfoAction => {
  return {
    type: AuthActionTypes.GET_USER_INFO,
    payload,
  };
};

export const businessInfoAction = (
  payload: IBusinessInfoPayload,
): IGetBusinessInfoAction => {
  return {
    type: AuthActionTypes.GET_BUSINESS_INFO,
    payload,
  };
};

export async function handleAsyncAction<T, U>(
  asyncOperation: () => Promise<T>,
  actionCreator: (payload: U) => AnyAction,
  dispatch: TypedDispatch,
  additionalOperation: (response: U) => void = () => undefined,
) {
  dispatch(pendingAction());
  try {
    const response: U = (await asyncOperation()) as unknown as U;
    additionalOperation(response);
    dispatch(actionCreator(response));
  } catch (error) {
    const payload = {
      general: error.message,
      response: error.response?.data,
    };
    dispatch(rejectedAction(payload));
  } finally {
    dispatch(fulfilledAction());
  }
}

export const signInThunk =
  (userFormData: IUserLogIn) => (dispatch: TypedDispatch) => {
    handleAsyncAction(
      () => logInUser(userFormData),
      logInAction,
      dispatch,
      localStorageManager.saveTokens,
    );
  };

export const logOutThunk = () => (dispatch: TypedDispatch) => {
  handleAsyncAction(
    () => logOutUser(),
    logOutAction,
    dispatch,
    localStorageManager.eraseUserInfo,
  );
};

export const getUserInfoThunk = () => async (dispatch: TypedDispatch) => {
  const userId = localStorageManager.getUserId();

  if (!userId) {
    return;
  }

  dispatch(pendingAction());
  try {
    const { email, role, status, id } = await getUserInfo(userId);

    dispatch(
      userInfoAction({
        email,
        role,
        status,
        id,
      }),
    );
  } catch (error) {
    const payload = {
      general: error.message,
      response: error.response?.data,
    };
    dispatch(rejectedAction(payload));
  } finally {
    dispatch(fulfilledAction());
  }
};

export const getBusinessInfoThunk = () => async (dispatch: TypedDispatch) => {
  const userId = localStorageManager.getUserId();

  if (!userId) {
    return;
  }

  dispatch(pendingAction());
  try {
    const {
      name,
      countryCode,
      phoneNumber,
      email,
      country,
      city,
      address,
      zipCode,
      role,
      status,
      userId: id,
    } = await getBusinessProfileInfo(userId);

    dispatch(
      businessInfoAction({
        name,
        countryCode,
        phoneNumber,
        email,
        country: country ?? "",
        city: city ?? "",
        address: address ?? "",
        zipCode: zipCode ?? "",
        role,
        status,
        id,
      }),
    );
  } catch (error) {
    const payload = {
      general: error.message,
      response: error.response?.data,
    };
    dispatch(rejectedAction(payload));
  } finally {
    dispatch(fulfilledAction());
  }
};

export const setIsSuccess = (isSuccess: boolean) => ({
  type: AuthActionTypes.SET_IS_SUCCESS,
  payload: isSuccess,
});
