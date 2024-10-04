import iconPan from "assets/svg/icon_pan.svg";
import iconShare from "assets/svg/icon_share.svg";

export const UNIT_EDIT = "EDIT";
export const UNIT_SHARE = "SHARE";

export const menuItems = [
  {
    id: 1,
    icon: iconPan,
    title: "Edit business unit",
    type: UNIT_EDIT,
  },
  {
    id: 2,
    icon: iconShare,
    title: "Share business unit",
    type: UNIT_SHARE,
  },
];
