import {
  BusinessUnitTypes,
  CategoryArrayType,
  IActiveMastersdAction,
  IActiveServicesdAction,
  ISetCategoryAction,
  ISetUnitIdAction,
} from "./constants";

export const setCategoryAction = (
  payload: CategoryArrayType,
): ISetCategoryAction => {
  return {
    type: BusinessUnitTypes.SET_CATEGORY,
    payload,
  };
};
export const getUnitId = (payload: number | null): ISetUnitIdAction => {
  return {
    type: BusinessUnitTypes.SET_UNITID,
    payload,
  };
};
export const setActiveMastersCategory = (
  payload: string,
): IActiveMastersdAction => {
  return {
    type: BusinessUnitTypes.SET_ACTIVE_MASTERS_CATEROGY,
    payload,
  };
};
export const setActiveServicesCategory = (
  payload: string,
): IActiveServicesdAction => {
  return {
    type: BusinessUnitTypes.SET_ACTIVE_SERVICES_CATEROGY,
    payload,
  };
};
