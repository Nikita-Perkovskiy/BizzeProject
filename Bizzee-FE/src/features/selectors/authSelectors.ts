import { RootState } from "store/rootReducer";

export const selectUserAuthInfo = (state: RootState) => state.auth;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectToken = (state: RootState) => state.auth.token;
export const selectId = (state: RootState) => state.auth.id;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectError = (state: RootState) => state.auth.error;
export const selectRole = (state: RootState) => state.auth.role;
export const selectStatus = (state: RootState) => state.auth.status;
export const selectIsSuccess = (state: RootState) => state.auth.isSuccess;
export const selectSuccessMessage = (state: RootState) =>
  state.auth.successRequestMessage;
export const selectUserRole = (state: RootState) => state.auth.role;
