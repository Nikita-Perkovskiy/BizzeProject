import {
  BusinessUnitAction,
  BusinessUnitTypes,
  IUnitState,
  initialState,
} from "./constants";

export const businessUnitReducer = (
  state: IUnitState = initialState,
  action: BusinessUnitAction,
) => {
  switch (action.type) {
    case BusinessUnitTypes.SET_CATEGORY:
      return {
        ...state,
        categoryArray: action.payload,
      };
    case BusinessUnitTypes.SET_UNITID:
      return {
        ...state,
        id: action.payload,
      };
    case BusinessUnitTypes.SET_ACTIVE_SERVICES_CATEROGY:
      return {
        ...state,
        activeServicesCategory: action.payload,
      };
    case BusinessUnitTypes.SET_ACTIVE_MASTERS_CATEROGY:
      return {
        ...state,
        activeMastersCategory: action.payload,
      };
    default:
      return state;
  }
};
