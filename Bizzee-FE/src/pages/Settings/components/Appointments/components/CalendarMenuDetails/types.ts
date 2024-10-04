import { IStatus } from "../../types";
import { IAppointmentDetails } from "../ScheduleAppointment/ScheduleAppointmentTypes";

export interface ICalendarMenuDetails {
  details: IAppointmentDetails;
  status: IStatus;
  menuState?: boolean;
  handleToggle: () => void;
  handleStatusAbsent: (id: number | null, status: boolean) => void;
  updateEventsList: () => void;
  updateDetailsStatus?: (status: IStatus) => void;
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  closeDetails: () => void;
}

export interface IDeleteRequest {
  id: number | null;
  cancelReason: string;
}
