import { RootState } from "store/rootReducer";

export const selectBusinessUnitId = (state: RootState) => state.businessUnit.id;
export const selectBusinessUnitCategory = (state: RootState) =>
  state.businessUnit.categoryArray;
export const selectActiveServicesCategory = (state: RootState) =>
  state.businessUnit.activeServicesCategory;
export const selectActiveMastersCategory = (state: RootState) =>
  state.businessUnit.activeMastersCategory;
