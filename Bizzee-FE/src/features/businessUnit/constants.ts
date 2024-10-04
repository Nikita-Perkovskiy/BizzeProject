export const initialState = {
  id: null,
  isLoading: false,
  categoryArray: [],
  isSuccess: false,
  activeServicesCategory: "",
  activeMastersCategory: "",
};
export interface IUnitState {
  id: null | number;
  isLoading: boolean;
  categoryArray: CategoryArrayType;
  isSuccess: boolean;
  activeServicesCategory: string;
  activeMastersCategory: string;
}

export enum BusinessUnitTypes {
  SET_CATEGORY = "SET_CATEGORY",
  SET_UNITID = "SET_UNITID",
  SET_ACTIVE_SERVICES_CATEROGY = "SET_ACTIVE_SERVICES_CATEROGY",
  SET_ACTIVE_MASTERS_CATEROGY = "SET_ACTIVE_MASTERS_CATEROGY",
}

export interface ISetCategoryAction {
  type: BusinessUnitTypes.SET_CATEGORY;
  payload: CategoryArrayType;
}
export interface ISetUnitIdAction {
  type: BusinessUnitTypes.SET_UNITID;
  payload: null | number;
}
export interface IActiveMastersdAction {
  type: BusinessUnitTypes.SET_ACTIVE_MASTERS_CATEROGY;

  payload: string;
}
export interface IActiveServicesdAction {
  type: BusinessUnitTypes.SET_ACTIVE_SERVICES_CATEROGY;
  payload: string;
}

export type BusinessUnitAction =
  | ISetCategoryAction
  | ISetUnitIdAction
  | IActiveServicesdAction
  | IActiveMastersdAction;

export type CategoryArrayType = { title: string; value: string }[] | [];
