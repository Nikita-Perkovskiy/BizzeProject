import { useCallback } from "react";
import { formatAppointmentDate } from "utils/formatDate";

export const useHandleSelectRegularRangeDates = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any,
  setStartDate: React.Dispatch<React.SetStateAction<Date>>,
  setEndDate: React.Dispatch<React.SetStateAction<Date>>,
  setIsDayChosen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return useCallback(
    (startDate: Date | null, endDate: Date | null) => {
      if (startDate && endDate) {
        setStartDate(startDate);
        formik.setFieldValue("startDate", formatAppointmentDate(startDate));

        setEndDate(endDate);
        formik.setFieldValue("endDate", formatAppointmentDate(endDate));
        setIsDayChosen(true);
      }
    },
    [formik, setStartDate, setEndDate, setIsDayChosen],
  );
};
