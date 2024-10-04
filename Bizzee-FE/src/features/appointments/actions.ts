import {
  AppointmentsActionTypes,
  ICreateTimeAction,
  IEventDetailsAction,
  IEventsAction,
  IEventsResourcesAction,
  IIsCreateWindowOpenAction,
  IIsDayViewAction,
  IIsEditWindowOpenAction,
  IIsPopupOpenAction,
  IPopupAction,
  IPopupState,
  ISelectedEventsAction,
  ISelectedMasterAction,
} from "./constants";
import {
  IAppointment,
  IEventState,
  IEventsResource,
  IMasterInfo,
} from "pages/Settings/components/Appointments/components/EventsCalendar/types";
import { IAppointmentDetails } from "pages/Settings/components/Appointments/components/ScheduleAppointment/ScheduleAppointmentTypes";

export const getEventsAction = (payload: IEventState): IEventsAction => {
  return {
    type: AppointmentsActionTypes.EVENTS,
    payload,
  };
};

export const getPopupPositionAction = (payload: IPopupState): IPopupAction => {
  return {
    type: AppointmentsActionTypes.POPUP_POSITION,
    payload,
  };
};

export const isPopupOpenAction = (payload: boolean): IIsPopupOpenAction => {
  return {
    type: AppointmentsActionTypes.IS_POPUP_OPEN,
    payload,
  };
};

export const isEditWindowOpenAction = (
  payload: boolean,
): IIsEditWindowOpenAction => {
  return {
    type: AppointmentsActionTypes.IS_EDIT_WINDOW_OPEN,
    payload,
  };
};

export const selectedEventsAction = (
  payload: IAppointment[],
): ISelectedEventsAction => {
  return {
    type: AppointmentsActionTypes.SELECTED_EVENTS,
    payload,
  };
};

export const toggleCreateWindowOpenAction = (
  payload: boolean,
): IIsCreateWindowOpenAction => {
  return {
    type: AppointmentsActionTypes.IS_CREATE_WINDOW_OPEN,
    payload,
  };
};

export const createTimeAction = (payload: string): ICreateTimeAction => {
  return {
    type: AppointmentsActionTypes.CREATE_TIME,
    payload,
  };
};

export const selectedMasterAction = (
  payload: Omit<IMasterInfo, "color">,
): ISelectedMasterAction => {
  return {
    type: AppointmentsActionTypes.SELECTED_MASTER,
    payload,
  };
};

export const eventsResourcesAction = (
  payload: IEventsResource[],
): IEventsResourcesAction => {
  return {
    type: AppointmentsActionTypes.EVENTS_RESOURCES,
    payload,
  };
};

export const getCurrentEventDetailsAction = (
  payload: IAppointmentDetails,
): IEventDetailsAction => {
  return {
    type: AppointmentsActionTypes.EVENTS_DETAILS,
    payload,
  };
};

export const isDayViewAction = (payload: boolean): IIsDayViewAction => {
  return {
    type: AppointmentsActionTypes.IS_DAY_VIEW,
    payload,
  };
};
