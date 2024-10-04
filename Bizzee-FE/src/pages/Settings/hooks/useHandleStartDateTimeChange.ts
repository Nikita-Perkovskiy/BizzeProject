import { useCallback } from "react";

export const useHandleStartDateTimeChange = (
  endTimeDate: string,
  setStartTimeDate: (value: React.SetStateAction<string>) => void,
  setEndTimeDate: (value: React.SetStateAction<string>) => void,
  setOverlapedEndTime: (value: React.SetStateAction<string>) => void,
  setOverlapedStartTime: (value: React.SetStateAction<string>) => void,
  setActualEndTime: (value: React.SetStateAction<string>) => void,
  setActualStartTime: (value: React.SetStateAction<string>) => void,
) => {
  return useCallback(
    (time: string) => {
      if (endTimeDate) {
        setStartTimeDate(time);
        if (time >= endTimeDate) {
          setEndTimeDate(time);
          setOverlapedEndTime(time);
          setOverlapedStartTime(time);
          setActualStartTime(time);
          setActualEndTime(time);
        } else {
          setOverlapedStartTime(time);
          setActualStartTime(time);
          if (time > endTimeDate) {
            setEndTimeDate(time);
            setOverlapedEndTime(time);
          }
        }
      }
    },
    [
      endTimeDate,
      setStartTimeDate,
      setEndTimeDate,
      setOverlapedEndTime,
      setOverlapedStartTime,
      setActualStartTime,
    ],
  );
};
