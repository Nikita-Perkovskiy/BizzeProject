import { IInitialValues } from "./types";

export const RANGE_TIME = "Select time period";

export const initialValues: IInitialValues = {
  masterUserId: null,
  businessUnit: "",
  businessUnitId: null,
  startDate: "",
  endDate: "",
  fromTime: "",
  toTime: "",
  workingDaysDTOS: [],
  customDatesDTO: {
    chooseDate: "",
    dates: [],
    customTimeFrom: "",
    customTimeTo: "",
    daysOff: false,
  },
};
