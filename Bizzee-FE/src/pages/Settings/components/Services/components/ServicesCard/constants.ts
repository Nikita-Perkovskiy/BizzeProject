import iconPan from "assets/svg/icon_pan.svg";
import iconCancel from "assets/svg/icon_delete.svg";

export const MOBILE_DESCR_LENGTH = 30;
export const TABLET_DESCR_LENGTH = 50;
export const DESKTOP_DESCR_LENGTH = 40;

export const menuItems = [
  {
    id: 1,
    icon: iconPan,
    title: "Edit",
    type: "EDIT",
  },
  {
    id: 2,
    icon: iconCancel,
    title: "Delete",
    type: "DELETE",
  },
];
