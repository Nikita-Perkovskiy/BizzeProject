import { IStatus } from "../../types";

export interface IService {
  id: number | null;
  name: string;
  duration: string;
}

interface IMaster {
  id: number | null;
  name: string;
  color: string;
}

interface IClient {
  id: number | null;
  email: string;
  name: string;
  countryCode: string;
  phone: string;
}

export interface IAppointmentDetails {
  id: number | null;
  startDatetime: string;
  endDatetime: string;
  client: IClient;
  procedures: string[];
  status: IStatus;
  services: IService[];
  price: number | null;
  specialRequests: string;
  master: IMaster;
}

export interface IScheduleAppointment {
  businessId: number;
  masterId: number | null;
  master: string | null;
  setSelectedMasterInAppointments: (master: string | null) => void;
  updateAppointments: () => void;
  appointmentDetails: IAppointmentDetails;
}

export interface IFormValues {
  [key: string]: string;
}

export interface BusinessUnit {
  id: number;
  name: string;
}

export interface IProcedure {
  id: number;
  name: string;
  duration: {
    title: string;
    durationInMinutes: number;
    value: string;
  };
}
