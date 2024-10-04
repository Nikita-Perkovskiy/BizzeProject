import { IAppointmentDetails } from "./components/ScheduleAppointment/ScheduleAppointmentTypes";

export interface IStatus {
  value: string;
  title: string;
}

export const initialDetails: IAppointmentDetails = {
  id: null,
  startDatetime: "",
  endDatetime: "",
  client: {
    id: null,
    email: "",
    name: "",
    countryCode: "",
    phone: "",
  },
  procedures: [],
  status: {
    value: "",
    title: "",
  },
  services: [
    {
      id: null,
      name: "",
      duration: "",
    },
  ],
  price: null,
  specialRequests: "",
  master: {
    id: null,
    name: "",
    color: "",
  },
};

export interface ICalendarMenu {
  handleToggleNestedMenu: (itemId: number) => void;
  selectedItem: number | null;
  details: IAppointmentDetails;
  menuState: boolean;
  isNestedMenuOpen: (isOpen?: boolean) => void;
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  updateEventsList: () => void;
}
