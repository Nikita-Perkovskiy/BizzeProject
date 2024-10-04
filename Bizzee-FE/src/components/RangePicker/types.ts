export interface IRangePicker {
  handleSelectDate: (startDate: Date | null, endDate: Date | null) => void;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  inline?: boolean;
  disabledKeyboardNavigation?: boolean;
  toggleCalendarOnIconClick?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  placeholderText?: string;
  dateFormat?: string;
  chosenDateStart?: Date;
  chosenDateEnd?: Date;
  customWorkingDays?: number[];
}
