export interface IWeekOfDays {
  businessUnitId: number | null;
  dayOfWeek: string;
  fromTime: string;
  toTime: string;
  numberOfDay?: number;
  active?: boolean;
}

export interface ICustomDatesDTO {
  businessUnitId: number | null;
  customDate: string;
  fromTime: string;
  toTime: string;
  isDayOff: boolean;
}

export type ICurrentWeekOfDays = Omit<IWeekOfDays, "businessUnitId">;

export type ICurrentCustomDatesDTO = Omit<ICustomDatesDTO, "businessUnitId">;

export type IUpdateWeekOfDays = Omit<
  IWeekOfDays,
  "businessUnitId" | "numberOfDay"
>;

export type IResponseIWeekOfDays = Omit<IWeekOfDays, "numberOfDay">;

export interface IValuesCustomDates {
  businessUnitId: number | null;
  customDate: string;
  fromTime: string;
  toTime: string;
  daysOff: boolean;
}

export interface IInitialValues {
  workingDays: ICurrentWeekOfDays[];
  customDatesDTO: ICurrentCustomDatesDTO[];
}

export interface IDataWeekOfDays {
  workingDays: IUpdateWeekOfDays[];
  customDatesDTO: ICurrentCustomDatesDTO[];
}
