export interface IMultipleDaysPicker {
  handleSelectDate: (dates: Date[]) => void;
  date?: Date[] | null;
  inline?: boolean;
  disabled?: boolean;
  chosenDateStart?: Date;
  chosenDateEnd?: Date;
  customWorkingDays?: number[];
}
