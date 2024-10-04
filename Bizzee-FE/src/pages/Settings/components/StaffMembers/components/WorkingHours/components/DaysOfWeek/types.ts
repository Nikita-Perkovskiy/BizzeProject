import { ICurrentWorkingDay, IWorkingDay } from "../../types";

export interface IDaysOfWeek {
  day: string;
  numberOfDay: number;
  selectedDays: (day: IWorkingDay) => void;
  startTimeDate: string;
  endTimeDate: string;
  timeOptions: string[];
  workingDaysDTOS: ICurrentWorkingDay[];
  hasData: boolean;
}
