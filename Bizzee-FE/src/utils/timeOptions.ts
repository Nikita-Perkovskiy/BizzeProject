import {
  HOURS_IN_DAY,
  INTERVALS_PER_HOUR,
  MINUTE_INTERVALS,
} from "config/constants";

export const timeOptions: string[] = Array.from(
  { length: HOURS_IN_DAY * INTERVALS_PER_HOUR },
  (_, i) => {
    const hours = Math.floor(i / INTERVALS_PER_HOUR);
    const minutes = (i % INTERVALS_PER_HOUR) * MINUTE_INTERVALS;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  },
);
