import { ICurrentWeekOfDays, IUpdateWeekOfDays } from "../../types";

export interface IDaysOfWeek {
  day: string;
  numberOfDay: number;
  selectedDays: (day: ICurrentWeekOfDays) => void;
  timeOptions: string[];
  workingDays: ICurrentWeekOfDays[] | IUpdateWeekOfDays[];
  hasData: boolean;
}
