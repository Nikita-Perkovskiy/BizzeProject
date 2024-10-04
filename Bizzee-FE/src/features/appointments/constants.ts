import {
  IAppointment,
  IEventState,
  IEventsResource,
  IMasterInfo,
} from "pages/Settings/components/Appointments/components/EventsCalendar/types";
import { IAppointmentDetails } from "../../pages/Settings/components/Appointments/components/ScheduleAppointment/ScheduleAppointmentTypes";

export const initialState: IAppointmentsState = {
  events: {
    eventsByStartDatetime: {},
    eventsByHour: {},
  },
  popupPosition: {
    top: 0,
    right: 0,
  },
  isPopupOpen: false,
  selectedEvents: [],
  isCreateWindowOpen: false,
  isEditWindowOpen: false,
  createTime: "",
  selectedMaster: null,
  resources: [],
  currentDetails: null,
  isDayView: false,
};

export interface IAppointmentsState {
  events: IEventState;
  popupPosition: IPopupState;
  isPopupOpen: boolean;
  selectedEvents: IAppointment[];
  isCreateWindowOpen: boolean;
  isEditWindowOpen: boolean;
  createTime: string;
  selectedMaster: Omit<IMasterInfo, "color"> | null;
  resources: IEventsResource[];
  currentDetails: IAppointmentDetails | null;
  isDayView: boolean;
}

export enum AppointmentsActionTypes {
  EVENTS = "EVENTS",
  POPUP_POSITION = "POPUP_POSITION",
  IS_POPUP_OPEN = "IS_POPUP_OPEN",
  SELECTED_EVENTS = "SELECTED_EVENTS",
  IS_CREATE_WINDOW_OPEN = "IS_CREATE_WINDOW_OPEN",
  IS_EDIT_WINDOW_OPEN = "IS_EDIT_WINDOW_OPEN",
  CREATE_TIME = "CREATE_TIME",
  SELECTED_MASTER = "SELECTED_MASTER",
  EVENTS_RESOURCES = "EVENTS_RESOURCES",
  EVENTS_DETAILS = "EVENTS_DETAILS",
  IS_DAY_VIEW = "IS_DAY_VIEW",
}

export interface IEventsAction {
  type: AppointmentsActionTypes.EVENTS;
  payload: IEventState;
}

export interface IPopupState {
  top: number;
  right: number;
}

export interface IPopupAction {
  type: AppointmentsActionTypes.POPUP_POSITION;
  payload: IPopupState;
}

export interface IIsPopupOpenAction {
  type: AppointmentsActionTypes.IS_POPUP_OPEN;
  payload: boolean;
}

export interface IIsEditWindowOpenAction {
  type: AppointmentsActionTypes.IS_EDIT_WINDOW_OPEN;
  payload: boolean;
}

export interface ISelectedEventsAction {
  type: AppointmentsActionTypes.SELECTED_EVENTS;
  payload: IAppointment[];
}

export interface IIsCreateWindowOpenAction {
  type: AppointmentsActionTypes.IS_CREATE_WINDOW_OPEN;
  payload: boolean;
}

export interface IIsEditWindowOpenAction {
  type: AppointmentsActionTypes.IS_EDIT_WINDOW_OPEN;
  payload: boolean;
}

export interface ICreateTimeAction {
  type: AppointmentsActionTypes.CREATE_TIME;
  payload: string;
}

export interface ISelectedMasterAction {
  type: AppointmentsActionTypes.SELECTED_MASTER;
  payload: Omit<IMasterInfo, "color">;
}

export interface IEventsResourcesAction {
  type: AppointmentsActionTypes.EVENTS_RESOURCES;
  payload: IEventsResource[];
}

export interface IEventDetailsAction {
  type: AppointmentsActionTypes.EVENTS_DETAILS;
  payload: IAppointmentDetails;
}

export interface IIsDayViewAction {
  type: AppointmentsActionTypes.IS_DAY_VIEW;
  payload: boolean;
}

export type AppointmentsAction =
  | IEventsAction
  | IPopupAction
  | IIsPopupOpenAction
  | ISelectedEventsAction
  | IIsCreateWindowOpenAction
  | IIsEditWindowOpenAction
  | ICreateTimeAction
  | ISelectedMasterAction
  | IEventsResourcesAction
  | IEventDetailsAction
  | IIsDayViewAction;
