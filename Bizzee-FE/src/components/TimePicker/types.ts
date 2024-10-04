export interface ITimePickerProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  disabled?: boolean;
  toggleCalendarOnIconClick?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  customInput?: React.ReactNode;
}
