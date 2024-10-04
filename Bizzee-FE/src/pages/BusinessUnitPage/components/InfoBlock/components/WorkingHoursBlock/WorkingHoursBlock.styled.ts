import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  wrapperBlock: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "15px",
    width: "100%",
    maxWidth: "300px",
  },
  workingHoursWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  },
  workingHoursMenuButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > svg": {
      color: "text.primary",
      width: "20px",
      height: "20px",
      zIndex: 3,
    },
  },
  chevronDown: {
    transform: "rotate(180deg)",
  },
  workingHoursSchedule: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      mr: "10px",
    },
  },
  workingHoursMenu: {
    top: "-8px",
    left: "-11px",
    "& .MuiPaper-root": {
      width: "fit-content",
      borderRadius: "10px",
      boxShadow: shadows.main,
    },
  },
  itemsMenuWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    p: "12px 14px",
    "& > p": {
      fowntWeight: 300,
    },
  },
  menuDay: {
    mr: "15px",
  },
  bookButton: {
    width: "100%",
    mt: "30px",
    p: "15px 86px",
  },
  infoIcon: {
    color: colors.text.secondary,
    mt: "2px",
    width: "18px",
    height: "18px",
  },
};
