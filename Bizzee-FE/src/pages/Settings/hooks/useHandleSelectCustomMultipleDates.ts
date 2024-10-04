import { useCallback } from "react";

export const useHandleSelectCustomMultipleDates = (
  setCustomMultipleDates: React.Dispatch<React.SetStateAction<Date[]>>,
) => {
  return useCallback(
    (dates: Date[]) => {
      setCustomMultipleDates(dates);
    },
    [setCustomMultipleDates],
  );
};
