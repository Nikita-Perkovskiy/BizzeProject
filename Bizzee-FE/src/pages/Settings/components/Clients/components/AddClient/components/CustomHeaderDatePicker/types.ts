import { IDatesPicker } from "components/DayWeekPicker/types";

export interface ICustomHeaderDatePicker
  extends Omit<
    IDatesPicker,
    "inline" | "isOpen" | "date" | "weekPicker" | "excludeDates" | "todayButton"
  > {
  minDate: Date;
  maxDate: Date;
}
