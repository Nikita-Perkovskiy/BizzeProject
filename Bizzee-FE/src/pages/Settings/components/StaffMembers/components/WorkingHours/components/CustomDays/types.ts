import { SelectChangeEvent } from "@mui/material";
import { FormikProps } from "formik";
import { IInitialValues } from "../../types";

export interface ICustomDaysProps {
  formik: FormikProps<IInitialValues>;
  cusomRangeDates: Date[];
  customMultipleDates: Date[];
  handleToggleCustomDates: () => void;
  isCustomDatesActive: boolean;
  handleSelect: (event: SelectChangeEvent) => void;
  selectOption: string;
  isRangePicker: boolean;
  handleSelectCustomRangeDates: (
    startDate: Date | null,
    endDate: Date | null,
  ) => void;
  startDate: Date;
  endDate: Date;
  choosedRegularDays: number[];
  handleSelectCustomMultipleDates: (dates: Date[]) => void;
  handleSwitchButton: () => void;
  isWeekend: boolean;
  isRangeDatesOverlap: boolean | null;
  isPeriodOverlap: boolean | null;
  startTimeDate: string;
  customStartTime: string;
  endTimeDate: string;
  customEndTime: string;
  handleSelectCustomStartTime: (time: string) => void;
  handleSelectCustomEndTime: (time: string) => void;
  timeOptions: string[];
  hasData: boolean;
}
