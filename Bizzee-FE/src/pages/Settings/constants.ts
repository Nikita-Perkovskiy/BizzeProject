import { routes } from "config/routes";
import iconEdit from "assets/svg/icon_pan.svg";
import iconDelete from "assets/svg/delete_icon.svg";
import { generatePath } from "utils/generatePathRoute";

export const USER_ACTIVE_STATUS = "ACTIVE";
export const ACTIVATE = "activate";
export const DEACTIVATE = "deactivate";
export const STATUS = "STATUS";
export const BUSINESS_UNIT = "business-unit";
export const MIN_QUERY_LENGTH = 2;
export const MAX_QUERY_LENGTH = 32;
export const ACTIVE = "Active";
export const NOT_ACTIVE = "Not Active";
export const SEND_OTP = "SEND_OTP";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export const sortButtons = [
  { label: "All", type: null },
  { label: "Active", type: true },
  { label: "Not Active", type: false },
];

export const businessMenuConfig = [
  {
    name: "Appointments",
    to: generatePath(routes.settings.root, routes.settings.appointments),
    sliderPosition: 89,
  },
  {
    name: "Clients",
    to: generatePath(routes.settings.root, routes.settings.clients.root),
    sliderPosition: 72,
  },
  {
    name: "Business profile",
    to: generatePath(routes.settings.root, routes.settings.businessProfile),
    sliderPosition: 54,
  },
  {
    name: "Business units",
    to: generatePath(routes.settings.root, routes.settings.units.root),
    sliderPosition: 36,
  },
  {
    name: "Staff members",
    to: generatePath(routes.settings.root, routes.settings.staff.root),
    sliderPosition: 18,
  },
  {
    name: "Services",
    to: generatePath(routes.settings.root, routes.settings.services),
    sliderPosition: 0,
  },
];

export const masterMenuConfig = [
  {
    name: "Appointments",
    to: generatePath(routes.settings.root, routes.settings.appointments),
    sliderPosition: 85,
  },
  {
    name: "Clients",
    to: generatePath(routes.settings.root, routes.settings.clients.root),
    sliderPosition: 57,
  },
  {
    name: "Profile",
    to: generatePath(routes.settings.root, routes.settings.businessProfile),
    sliderPosition: 30,
  },
  {
    name: "Services",
    to: generatePath(routes.settings.root, routes.settings.services),
    sliderPosition: 0,
  },
];

export const selectRoles = ["Master", "Manager"];

export const selectItemStatus = ["Confirmed", "Absent", "Completed"];

export const showMoreMenuItems = [
  {
    id: 1,
    icon: iconEdit,
    title: "Edit",
    type: EDIT,
  },
  {
    id: 2,
    icon: iconDelete,
    title: "Delete",
    type: DELETE,
  },
];
