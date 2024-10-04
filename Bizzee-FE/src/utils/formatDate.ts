import { format, parse } from "date-fns";

export function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  return format(date, "dd.MM.yyyy");
}

export function formatAppointmentDate(timestamp: Date) {
  const date = new Date(timestamp);
  return format(date, "dd/MM/yyyy");
}

export function formatStringToDate(dateString: string): Date | null {
  if (!dateString) {
    return null;
  }

  return parse(dateString, "dd/MM/yyyy", new Date());
}

export const formatCalendarRangeDate = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

export function formatClientDate(timestamp: Date) {
  const date = new Date(timestamp);
  return format(date, "yyyy-MM-dd");
}

export const parseDateString = (dateStr: string): [number, number, number] => {
  const parts = dateStr.split("-");

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  return [year, month, day];
};
