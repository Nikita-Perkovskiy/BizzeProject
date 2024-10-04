import { useCallback } from "react";

export const useHandleEndDateTimeChange = (
  startTimeDate: string,
  setEndTimeDate: (value: React.SetStateAction<string>) => void,
  setOverlapedEndTime: (value: React.SetStateAction<string>) => void,
  setActualEndTime: (value: React.SetStateAction<string>) => void,
  setActualStartTime: (value: React.SetStateAction<string>) => void,
) => {
  return useCallback(
    (time: string) => {
      if (startTimeDate) {
        if (time >= startTimeDate) {
          setEndTimeDate(time);
          setOverlapedEndTime(time);
          setActualEndTime(time);
        } else {
          setEndTimeDate(startTimeDate);
          setOverlapedEndTime(time);
        }
        setActualStartTime(startTimeDate);
      }
    },
    [startTimeDate, setEndTimeDate, setOverlapedEndTime, setActualEndTime],
  );
};
