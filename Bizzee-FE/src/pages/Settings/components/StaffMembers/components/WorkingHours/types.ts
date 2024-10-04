export interface IWorkingDay {
  dayOfWeek: string;
  fromTime: string;
  toTime: string;
  active: boolean;
  numberOfDay: number;
}

interface IValuesCustomDatesDTO {
  chooseDate: string | null;
  customTimeFrom: string;
  customTimeTo: string;
  daysOff: boolean;
}

interface IResponseCustomDatesDTO extends IValuesCustomDatesDTO {
  responseDates: string[];
}

export interface ICustomDatesDTO extends IValuesCustomDatesDTO {
  dates: string[];
}

interface IDefaultValues {
  masterUserId: number | null;
  businessUnit: string;
  businessUnitId: number | null;
  startDate: string;
  endDate: string;
  fromTime: string;
  toTime: string;
}

export interface IInitialValues extends IDefaultValues {
  workingDaysDTOS: IWorkingDay[];
  customDatesDTO: ICustomDatesDTO;
}

export type ICurrentWorkingDay = Omit<IWorkingDay, "numberOfDay">;

interface IResponseValues extends IDefaultValues {
  workingDaysDTOS: ICurrentWorkingDay[];
  customDatesDTO: IResponseCustomDatesDTO;
}

export type CurrentInitialValues = Omit<IResponseValues, "businessUnit">;
