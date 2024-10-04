import { useCallback } from "react";
import { IUpdateWeekOfDays } from "../../Settings/components/BusinessUnits/components/UnitsWorkingHours/types";

export const useHandleSelectDays = (
  setWorkingDays: React.Dispatch<React.SetStateAction<IUpdateWeekOfDays[]>>,
) => {
  const handleSelectDays = useCallback(
    (day: IUpdateWeekOfDays) => {
      setWorkingDays((prevWorkingDays) => {
        const index = prevWorkingDays.findIndex(
          (d) => d.dayOfWeek === day.dayOfWeek,
        );
        if (index !== -1) {
          const updatedDays = [...prevWorkingDays];
          updatedDays[index] = { ...updatedDays[index], ...day };
          return updatedDays;
        } else {
          return [...prevWorkingDays, day];
        }
      });
    },
    [setWorkingDays],
  );

  return handleSelectDays;
};
