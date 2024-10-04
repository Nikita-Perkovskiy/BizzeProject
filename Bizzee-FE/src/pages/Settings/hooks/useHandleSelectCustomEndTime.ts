import { useCallback } from "react";

export const useHandleSelectCustomEndTime = (
  customStartTime: string,
  setCustomEndTime: React.Dispatch<React.SetStateAction<string>>,
  setOverlapedEndTime: React.Dispatch<React.SetStateAction<string>>,
) => {
  const handleSelectCustomEndTime = useCallback(
    (time: string) => {
      if (time >= customStartTime) {
        setCustomEndTime(time);
        setOverlapedEndTime(time);
      } else {
        setCustomEndTime(customStartTime);
        setOverlapedEndTime(customStartTime);
      }
    },
    [customStartTime, setCustomEndTime, setOverlapedEndTime],
  );

  return handleSelectCustomEndTime;
};
