import {
  AppointmentsAction,
  AppointmentsActionTypes,
  IAppointmentsState,
  initialState,
} from "./constants";

export const appointmentsReducer = (
  state: IAppointmentsState = initialState,
  action: AppointmentsAction,
): IAppointmentsState => {
  switch (action.type) {
    case AppointmentsActionTypes.EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case AppointmentsActionTypes.POPUP_POSITION:
      return {
        ...state,
        popupPosition: action.payload,
      };
    case AppointmentsActionTypes.IS_POPUP_OPEN:
      return {
        ...state,
        isPopupOpen: action.payload,
      };
    case AppointmentsActionTypes.SELECTED_EVENTS:
      return {
        ...state,
        selectedEvents: action.payload,
      };
    case AppointmentsActionTypes.IS_CREATE_WINDOW_OPEN:
      return {
        ...state,
        isCreateWindowOpen: action.payload,
      };
    case AppointmentsActionTypes.IS_EDIT_WINDOW_OPEN:
      return {
        ...state,
        isEditWindowOpen: action.payload,
      };
    case AppointmentsActionTypes.CREATE_TIME:
      return {
        ...state,
        createTime: action.payload,
      };
    case AppointmentsActionTypes.SELECTED_MASTER:
      return {
        ...state,
        selectedMaster: action.payload,
      };
    case AppointmentsActionTypes.EVENTS_RESOURCES:
      return {
        ...state,
        resources: action.payload,
      };
    case AppointmentsActionTypes.EVENTS_DETAILS:
      return {
        ...state,
        currentDetails: action.payload,
      };
    case AppointmentsActionTypes.IS_DAY_VIEW:
      return {
        ...state,
        isDayView: action.payload,
      };

    default:
      return state;
  }
};
