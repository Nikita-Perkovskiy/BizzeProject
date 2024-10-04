import { FormikProps } from "formik";
import { ICurrentWorkingDay, IInitialValues, IWorkingDay } from "../../types";

export interface IRegularDaysProps {
  formik: FormikProps<IInitialValues>;
  regularRangeDates: Date[] | null[];
  handleSelectRegularRangeDates: (
    startDate: Date | null,
    endDate: Date | null,
  ) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  isDayChosen: boolean;
  startTimeDate: string;
  endTimeDate: string;
  handleStartDateTimeChange: (time: string) => void;
  handleEndDateTimeChange: (time: string) => void;
  handleSelectDays: (day: IWorkingDay) => void;
  actualStartTime: string;
  actualEndTime: string;
  timeOptions: string[];
  workingDaysDTOS: ICurrentWorkingDay[];
  hasData: boolean;
}
