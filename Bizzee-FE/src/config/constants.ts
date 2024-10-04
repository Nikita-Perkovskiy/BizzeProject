import { routes } from "config/routes";

export const LOCAL_STORAGE_AUTH_KEY = "bizzee-auth";
export const serverError500 = 500;
export const serverError400 = 400;
export const deactivatedStatusErrorMessage =
  "Try later. Problems on the server : Your account was deactivated. Please contact the organization administrator";
export const incorrectPasswordMessage =
  "Try later. Problems on the server : Access denied. Wrong username or password";
export const deletedTokenErrorMessage = "Refresh token is not exists";
export const accessTokenExpiredMessage = "Token has expired";
export const acceptImgTypes = "image/jpeg,image/png,image/svg+xml,image/heic";
export const acceptImgFormats =
  ".jfif, .pjpeg, .jpeg, .pjp, .jpg, .png, .svgz, .svg, .heic";
export const ONE_MB_SIZE = 1048576;
export const MAX_IMAGE_SIZE = ONE_MB_SIZE * 5;
export const TAGS_REGEX = /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9 -]*$/;
export const ENTER_KEY = "Enter";
export const initialAllFilter = "All";

export const DEFAULT_COUNTRY = "Poland";
export const DEFAULT_COUNTRY_CODE = "+48";
export const DEFAULT_CURRENCY = "PLN";
export const MAX_PHONE_LENGTH = 9;
export const MAX_PRICE_LENGTH = 6;
export const appointmentOnlyHoursDateFormat = "yyyy-MM-dd'T'HH:00:00";
export const appointmentDateFormat = "yyyy-MM-dd'T'HH:mm:ss";
export const DAYS_IN_WEEK = 6;
export const MIN_QUERY_LENGTH = 2;
export const MAX_QUERY_LENGTH = 32;
export const TODAY = "today";
export const PAST_DAY = "past-day";
export const NEXT_WEEK_DAY = "next-week-day";
export const LAST_WEEK_DAY = "last-week-day";
export const FIRST_WEEK_DAY = "first-week-day";
export const SINGLE_DAY = "single-day";
export const CHOSEN_DATE = "chosen-date";
export const CHOSEN_WEEKEND = "chosen-weekend";
export const MOBILE_DESCR_LENGTH = 30;
export const TABLET_DESCR_LENGTH = 50;
export const SELECT_DAYS = "SELECT_DAYS";
export const SELECT_TIME_PERIOD = "SELECT_TIME_PERIOD";

export const staffTabsConfig = [
  {
    name: "General info",
    to: routes.settings.staff.add.general,
  },
  {
    name: "Working Hours",
    to: routes.settings.staff.add.schedule,
  },
  {
    name: "Master’s services",
    to: routes.settings.staff.add.services,
  },
  {
    name: "Portfolio",
    to: routes.settings.staff.add.portfolio,
  },
  {
    name: "Certificates",
    to: routes.settings.staff.add.certificates,
  },
  {
    name: "Reviews",
    to: routes.settings.staff.add.reviews,
  },
];

export const staffEditTabsConfig = [
  {
    name: "General info",
    to: routes.settings.staff.edit.masterId.general,
  },
  {
    name: "Working Hours",
    to: routes.settings.staff.edit.masterId.schedule,
  },
  {
    name: "Master’s services",
    to: routes.settings.staff.edit.masterId.services,
  },
  {
    name: "Portfolio",
    to: routes.settings.staff.edit.masterId.portfolio,
  },
  {
    name: "Certificates",
    to: routes.settings.staff.edit.masterId.certificates,
  },
  {
    name: "Reviews",
    to: routes.settings.staff.edit.masterId.reviews,
  },
];

export const unitsTabsConfig = [
  {
    name: "General info",
    to: routes.settings.units.add.general,
  },
  {
    name: "Working Hours",
    to: routes.settings.units.add.schedule,
  },
  {
    name: "Staff",
    to: routes.settings.units.add.staff,
  },
  {
    name: "Portfolio",
    to: routes.settings.units.add.portfolio,
  },
  {
    name: "Certificates",
    to: routes.settings.units.add.certificates,
  },
  {
    name: "Reviews",
    to: routes.settings.units.add.reviews,
  },
];

export const unitsEditTabsConfig = [
  {
    name: "General info",
    to: routes.settings.units.edit.unitId.general,
  },
  {
    name: "Working Hours",
    to: routes.settings.units.edit.unitId.schedule,
  },
  {
    name: "Staff",
    to: routes.settings.units.edit.unitId.staff,
  },
  {
    name: "Portfolio",
    to: routes.settings.units.edit.unitId.portfolio,
  },
  {
    name: "Certificates",
    to: routes.settings.units.edit.unitId.certificates,
  },
  {
    name: "Reviews",
    to: routes.settings.units.edit.unitId.reviews,
  },
];

export const daysOfWeek = [
  {
    day: "Monday",
    numberOfDay: 1,
  },
  {
    day: "Tuesday",
    numberOfDay: 2,
  },
  {
    day: "Wednesday",
    numberOfDay: 3,
  },
  {
    day: "Thursday",
    numberOfDay: 4,
  },
  {
    day: "Friday",
    numberOfDay: 5,
  },
  {
    day: "Saturday",
    numberOfDay: 6,
  },
  {
    day: "Sunday",
    numberOfDay: 0,
  },
];

export const selectPickerOptions: string[] = [
  "Select days",
  "Select time period",
];

export const displayToValueConfig = {
  "Select days": SELECT_DAYS,
  "Select time period": SELECT_TIME_PERIOD,
};

export const valueToDisplayConfig = {
  SELECT_DAYS: "Select days",
  SELECT_TIME_PERIOD: "Select time period",
};

export const dateMaskRegex = [
  /[0-3]/,
  /\d/,
  "/",
  /[0-1]/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const timeMaskRegex = [/[0-2]/, /\d/, ":", /[0-5]/, /\d/];

const MINUTES_IN_HOUR = 60;
export const MINUTE_INTERVALS = 15;
export const HOURS_IN_DAY = 24;
export const INTERVALS_PER_HOUR = MINUTES_IN_HOUR / MINUTE_INTERVALS;
