import {
  AuthAction,
  AuthActionTypes,
  IAuthState,
  initialState,
} from "./constants";

export const authReducer = (
  state: IAuthState = initialState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.PENDING:
      return {
        ...state,
        isLoading: true,
        error: {
          general: "",
          response: "",
        },
      };
    case AuthActionTypes.REJECTED:
      return {
        ...state,
        error: {
          general: action.payload.general,
          response: action.payload.response,
        },
      };
    case AuthActionTypes.FULFILLED:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActionTypes.LOGIN: {
      const { token, refreshToken, id, role, status } = action.payload;
      return {
        ...state,
        token,
        refreshToken,
        id,
        role,
        status,
      };
    }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: "",
        refreshToken: "",
        id: null,
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
      };
    case AuthActionTypes.GET_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionTypes.GET_BUSINESS_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionTypes.SET_IS_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload,
      };
    default:
      return state;
  }
};
