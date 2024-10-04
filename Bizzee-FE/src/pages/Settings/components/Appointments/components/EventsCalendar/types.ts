import { DateFormat, DateRangeFormatFunction, Event } from "react-big-calendar";
import { IStatus } from "../../types";

export interface IClient {
  email: string;
  name: string;
  countryCode: string;
  phone: string;
}

export interface IMasterInfo {
  id: number;
  name: string;
  color: IMasterColor;
}

export interface IAppointmentStatus {
  title: string;
  value: string;
}

export interface IMasterColor {
  title: string;
  value: string;
}
export interface IAppointment {
  id: number;
  startDatetime: string;
  endDatetime: string;
  master: IMasterInfo;
  client: Pick<IClient, "name">;
  procedures: string[];
  status: IStatus;
}

export interface ICustomEvent extends Event {
  id: number;
  resourceId: number | number[];
  color: string;
  fullInfo: IAppointment;
}
export type Formats = {
  dayRangeHeaderFormat: DateRangeFormatFunction;
  timeGutterFormat: DateFormat;
};

export interface IEventsResource {
  resourceId: number;
  resourceTitle: string;
  color: string;
}

export interface IEventsByStartDatetime {
  [startDatetime: string]: IAppointment[];
}

export interface IEventState {
  eventsByStartDatetime: IEventsByStartDatetime;
  eventsByHour: IEventsByStartDatetime;
}

export interface ICalendarProps {
  appointments: IAppointment[];
  currentDate: Date;
  setCurrentDate: (date: Date | ((prevDate: Date) => Date)) => void;
}
