import { IAppointmentDetails } from "../../ScheduleAppointment/ScheduleAppointmentTypes";

export interface IDeleteAppointment {
  details: IAppointmentDetails;
  isBlock: boolean;
  closeModal: () => void;
  updateEventsList: () => void;
  calendarMenuDetailsClose: () => void;
  closeDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
