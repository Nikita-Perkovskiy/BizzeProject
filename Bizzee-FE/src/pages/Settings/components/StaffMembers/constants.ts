import iconEye from "assets/svg/icon_eye.svg";
import iconPan from "assets/svg/icon_pan.svg";
import iconShare from "assets/svg/icon_share.svg";

export const menuItems = [
  {
    id: 1,
    icon: iconPan,
    title: "Edit employee profile",
    type: "EDIT",
  },
  {
    id: 2,
    icon: iconEye,
    title: "Send OTP",
    type: "SEND_OTP",
  },
  {
    id: 3,
    icon: iconShare,
    title: "Share employee profile",
    type: "SHARE",
  },
];

export const MASTER_STATUS = {
  PENDING: "PENDING",
  VERIFY: "VERIFY",
  ACTIVE: "ACTIVE",
  DEACTIVATED: "DEACTIVATED",
};
