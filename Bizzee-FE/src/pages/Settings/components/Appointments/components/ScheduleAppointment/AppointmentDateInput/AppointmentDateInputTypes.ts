export interface AppointmentDateInputProps {
  handleSelectDate: (date: Date) => void;
  date: string;
  excludeDates?: string[];
  maxDate?: Date;
}
