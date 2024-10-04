import { ICurrentWeekOfDays, IUpdateWeekOfDays } from "../../types";

export interface IWeeklyShedule {
  handleSelectDays: (day: ICurrentWeekOfDays) => void;
  timeOptions: string[];
  workingDays: IUpdateWeekOfDays[];
  hasData: boolean;
}
