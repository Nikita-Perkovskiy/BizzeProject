import { useCallback } from "react";

export const useHandleSelectCustomStartTime = (
  customEndTime: string,
  setCustomStartTime: React.Dispatch<React.SetStateAction<string>>,
  setCustomEndTime: React.Dispatch<React.SetStateAction<string>>,
  setOverlapedStartTime: React.Dispatch<React.SetStateAction<string>>,
  setOverlapedEndTime: React.Dispatch<React.SetStateAction<string>>,
) => {
  const handleSelectCustomStartTime = useCallback(
    (time: string) => {
      if (time >= customEndTime) {
        setCustomEndTime(time);
        setOverlapedEndTime(time);
        setCustomStartTime(time);
        setOverlapedStartTime(time);
      } else {
        setCustomStartTime(time);
        setOverlapedStartTime(time);
        if (time > customEndTime) {
          setCustomStartTime(time);
          setOverlapedStartTime(time);
        }
      }
    },
    [
      customEndTime,
      setCustomStartTime,
      setCustomEndTime,
      setOverlapedStartTime,
      setOverlapedEndTime,
    ],
  );

  return handleSelectCustomStartTime;
};
