import { useCallback } from "react";

export const useHandleSelectCustomRangeDates = (
  setCustomStartDate: React.Dispatch<React.SetStateAction<Date>>,
  setCustomEndDate: React.Dispatch<React.SetStateAction<Date>>,
) => {
  return useCallback(
    (startDate: Date | null, endDate: Date | null) => {
      if (startDate && endDate) {
        setCustomStartDate(startDate);
        setCustomEndDate(endDate);
      }
    },
    [setCustomStartDate, setCustomEndDate],
  );
};
