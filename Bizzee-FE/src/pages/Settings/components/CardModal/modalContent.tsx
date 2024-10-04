import {
  ACTIVATE,
  DEACTIVATE,
  USER_ACTIVE_STATUS,
} from "pages/Settings/constants";
import { styles } from "../StaffMembers/components/StaffCard/StaffCard.styled";
import { SxProps, Theme } from "@mui/material/styles";

export const modalContent: {
  [key: string]: {
    title: string;
    body: (userStatus: string) => string[];
    buttonMessage: (userStatus: string) => string[];
    secondBtnMessage: string;
    style: (userStatus: string) => SxProps<Theme>;
  };
} = {
  ["SEND_OTP"]: {
    title: "Send OTP?",
    body: () => ["send ONE TIME PASSWORD to"],
    buttonMessage: () => ["Send"],
    secondBtnMessage: "Cancel",
    style: () => styles.menuItem,
  },
  ["STATUS"]: {
    title: "Are you sure?",
    body: (userStatus) => [
      `${userStatus === USER_ACTIVE_STATUS ? DEACTIVATE : ACTIVATE}`,
    ],
    buttonMessage: (userStatus) => [
      `${userStatus === USER_ACTIVE_STATUS ? DEACTIVATE : ACTIVATE}`,
    ],
    secondBtnMessage: "Cancel",
    style: (userStatus) =>
      userStatus === USER_ACTIVE_STATUS
        ? styles.userInActive
        : styles.userActive,
  },
};
