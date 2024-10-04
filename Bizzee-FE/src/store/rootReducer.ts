/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/reducer";
import { appointmentsReducer } from "features/appointments/reducer";
import { businessUnitReducer } from "features/businessUnit/reducer";

const appReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentsReducer,
  businessUnit: businessUnitReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
