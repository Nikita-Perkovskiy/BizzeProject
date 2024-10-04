import { IFormValues } from "pages/Layout/components/AuthInput/types";
import {
  ICustomDatesDTO,
  IWorkingDay,
} from "pages/Settings/components/StaffMembers/components/WorkingHours/types";
import { IStatus } from "../pages/Settings/components/Appointments/types";

const VERSION_ROUTE = "/api/v1";
const AUTH_ROUTE = `${VERSION_ROUTE}/auth`;
export const MASTER_ROUTE = `${VERSION_ROUTE}/masters`;
export const BUSINESS_UNIT_ROUTE = `${VERSION_ROUTE}/business-units`;
export const CLIENTS_ROUTE = `${VERSION_ROUTE}/clients`;
export const APPOINTMENT_ROUTE = `${VERSION_ROUTE}/appointments`;
export const USER_SIGN_UP_ROUTE = `${AUTH_ROUTE}/user-register`;
export const USER_LOG_IN_ROUTE = `${AUTH_ROUTE}/signin`;
export const USER_LOG_OUT_ROUTE = `${AUTH_ROUTE}/signout`;
export const USER_CHANGED_PASSWORD_ROUTE = `${MASTER_ROUTE}/change-password`;
export const TOKEN_REFRESH_ROUTE = `${AUTH_ROUTE}/refreshtoken`;
export const USER_INFO_ROUTE = `${VERSION_ROUTE}/users`;
export const BUSINESS_INFO_ROUTE = `${VERSION_ROUTE}/business`;
export const CLIENT_ROUTE = `${VERSION_ROUTE}/client`;
export const BUSINESS_USER_INFO_ROUTE = `${BUSINESS_INFO_ROUTE}/user`;
export const STAFF_MEMBERS = `${MASTER_ROUTE}/businessOwner`;
export const ALL_STAFF_MEMBERS = `${MASTER_ROUTE}/all/businessOwner`;
export const STAFF_STATUS = `${MASTER_ROUTE}/activate`;
export const SEND_OTP_ROUTE = `${MASTER_ROUTE}/send-otp`;
export const MASTER_LANGUAGES_ROUTE = `${MASTER_ROUTE}/languages`;
export const MASTER_EXPERIENCES_ROUTE = `${MASTER_ROUTE}/experiences`;
export const MASTER_CATEGORIES_ROUTE = `${MASTER_ROUTE}/categories`;
export const MASTER_CREATE_ROUTE = `${MASTER_ROUTE}`;
export const BUSINESS_UNIT_CATEGORIES_ROUTE = `${BUSINESS_UNIT_ROUTE}/business-categories`;
export const BUSINESS_UNIT_TAGS_ROUTE = `${BUSINESS_UNIT_ROUTE}/tags`;
export const ADD_BUSINESS_UNIT_ROUTE = `${BUSINESS_UNIT_ROUTE}`;
export const PROCEDURES = `${VERSION_ROUTE}/procedures`;
export const MASTERS_IN_BUSINESS_UNIT = `${MASTER_ROUTE}/businessUnit`;
export const MASTER_PORTFOLIO_ROUTE = `${VERSION_ROUTE}/portfolio`;
export const MASTER_PORTFOLIO_LIST = `${MASTER_PORTFOLIO_ROUTE}/master`;
export const BUSINESS_UNITS_MASTERS = `${MASTER_ROUTE}/names/business-unit`;
export const BUSINESS_UNITS_NAMES = `${BUSINESS_UNIT_ROUTE}/names`;
export const BUSINESS_UNITS_APPOINTMENT = `${APPOINTMENT_ROUTE}/business-unit`;
export const MASTER_PROCEDURES = `${PROCEDURES}/master`;
export const MASTERS_PROCEDURES = `${VERSION_ROUTE}/masters`;
export const ADD_MASTER_PROCEDURES = `${PROCEDURES}/add/master`;
export const WORK_TIME = `${VERSION_ROUTE}/work-time`;
export const SEARCH_ROUTE = `${VERSION_ROUTE}/search`;
export const SEARCH_ROUTE_BY_NAME = `${SEARCH_ROUTE}/names`;
export const SEARCH_ROUTE_BY_NAME_LOCATIONS = `${SEARCH_ROUTE}/names-locations`;
export const SEARCH_ROUTE_BY_LOCATIONS = `${SEARCH_ROUTE}/locations`;

export interface IUserSignUp extends IFormValues {
  name: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: "BUSINESS_OWNER" | "CLIENT";
}

export interface IUserLogIn extends IFormValues {
  email: string;
  password: string;
}

export interface IRefreshToken {
  refreshToken: string;
}

export interface ISearchClients {
  searchCriteria: string;
}

export interface IBusinessUpdate {
  userId: number;
  name: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
}

export interface IUpdateStatus {
  id: number;
  enable: boolean;
}

export interface IUpdateBusinessUnitStatus {
  status: boolean;
}

export interface IUpdateBusinessUnits {
  status?: boolean | null;
  param?: string;
}

export interface IUserProfile {
  businessUnitId: number;
  title: string;
  description: string;
  category: string;
  location: string;
  priceType: string;
  priceMin: string;
  priceMax: string;
  currency: string;
  duration: string;
  additionalServiceDtos: AdditionalService[];
}

export interface AdditionalService {
  optionTitle: string;
  price: string;
}

export interface IUpdateParam {
  prefix?: string;
  status?: boolean | null;
}

export interface IUpdateServicesStatus {
  id: number;
  enable: boolean;
}

export interface IBusinessUnitId {
  name: string;
  country: string;
  address: string;
  zipCode: string;
}

export interface IBusinessUnitProcedures {
  masterId: number | null;
  datetime: string;
}

export interface ITimeForAppointment {
  masterId: number | null;
  procedureId: number | null;
  date: string | null;
}

export interface IBusyDays {
  procedureId: number | null;
  masterId: number | null;
}

export interface IMastersForAppointment {
  procedureIds: string;
  datetime: string;
}

export interface IAppointmentCalendar {
  category?: string | null;
  masterId?: number | null;
  startDate: string;
  endDate: string;
}

export interface IUpdateAppointmentStatus {
  status: string;
}
export interface IAppointmentData {
  startDatetime: string;
  currency: string;
  price: number | null;
  specialRequests: string;
  businessUnitId: number;
  masterAccountId: number;
  client: {
    email: string | null;
    name: string;
    countryCode: string;
    phone: string;
  };
  procedureIds: number[];
}

export interface IUpdateAppointment {
  masterUserId: number;
  serviceId: number;
  dateTime: string;
  currency: string;
  price: number | null;
  specialRequests: string;
  status: string | IStatus;
  client: {
    email: string;
    name: string;
    countryCode: string;
    phone: string;
    id: number | null;
  };
}

export interface IGetProceduresMasters {
  prefix?: string;
  categories?: string;
}

export interface IMasterWorkingHours {
  businessUnitId: number | null;
  startDate: string;
  endDate: string;
  fromTime: string;
  toTime: string;
  workingDaysDTOS: Omit<IWorkingDay, "numberOfDay">[];
  customDatesDTO: ICustomDatesDTO | null;
}

export interface IValueTypes {
  value: string;
  title: string;
}

export interface IAllBusinessUnitsParams {
  category: string | null;
  page: number;
  size: number;
  sort: string;
}

export interface IInfoForSchedulingDetails {
  search: string;
  masterUserId: number | null;
  serviceId: number | null;
  dateTime: string | null;
}
