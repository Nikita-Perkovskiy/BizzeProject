export interface DateTimeChangeHandlers {
  handleStartDateTimeChange: (time: string) => void;
  handleEndDateTimeChange: (time: string) => void;
}

export interface FormValues {
  startDate: Date | null;
  endDate: Date | null;
}
