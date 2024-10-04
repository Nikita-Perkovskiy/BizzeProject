import React from "react";

export interface IDatesPicker {
  handleSelectDate: (date: Date) => void;
  inline?: boolean;
  isOpen?: boolean;
  date?: Date;
  weekPicker?: boolean;
  dateFormat?: string;
  showIcon?: boolean;
  toggleCalendarOnIconClick?: boolean;
  shouldCloseOnSelect?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  excludeDates?: string[];
  todayButton?: boolean;
  minDate?: Date;
  maxDate?: Date;
  icon?: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  placeholder?: string;
  showMonthDropdown?: boolean;
  showYearDropdown?: boolean;
  dropdownMode?: "select" | "scroll" | undefined;
  customInput?: React.ReactNode;
  disabledKeyboardNavigation?: boolean;
  disabled?: boolean;
}
