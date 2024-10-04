import { colors } from "config/styles/themeColors";
import { fonts } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";
import { hexToRgba } from "utils/hexToRgba";

export const styles = {
  workingHoursWrapper: {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    p: "30px 20px",
    m: "40px 0",
    gap: "30px",
    boxShadow: shadows.main,
    overflow: "auto",
    "@media (min-width:991px)": {
      p: "30px 40px",
    },
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    width: "100%",
    minWidth: {
      md: "370px",
    },
    gap: {
      xs: "20px",
      lg: "30px",
    },
  },
  headline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
  },
  headerTitle: {
    fontWeight: 400,
    fontSize: {
      lg: "34px",
      xs: "24px",
    },
    lineHeight: "1.05",
    color: "text.primary",
  },
  headerDesrc: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "23px",
    color: "text.secondary",
  },
  workingHoursActions: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "30px",
      md: "40px",
    },
  },
  businesSelectWrapper: {
    mt: {
      md: "30px",
    },
    maxWidth: {
      xs: "100%",
      md: "300px",
    },
  },
  settingsWeekWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "30px",
      lg: "40px",
    },
    "& > div:nth-of-type(1)": {
      flex: "1",
    },
    "& > div:nth-of-type(2)": {
      flex: ".7",
    },
    "@media (min-width:1023px)": {
      flexDirection: "row",
    },
  },
  daysWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    borderRadius: "10px",
    boxShadow: {
      xs: "none",
      md: shadows.main,
    },
    p: {
      md: "30px 40px",
    },
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      md: "row",
    },
    justifyContent: {
      md: "right",
    },
    alignItems: {
      xs: "center",
    },
  },
  generalBtn: {
    height: "50px",
    width: {
      xs: "320px",
      md: "180px",
    },
    border: "1px solid",
    "&:last-child": {
      mb: {
        xs: "20px",
        md: "0px",
      },
    },
  },
  cancelBtn: {
    mr: {
      md: "20px",
    },
  },
  timePicker: {
    "& .react-datepicker": {
      fontFamily: fonts.text,
      fontWeight: 400,
      border: "none",
    },
    "& .react-datepicker-wrapper": {
      width: "100%",
    },
    "& .react-datepicker__input-container": {
      display: "flex",
      flexDirection: "row-reverse",
    },
    "& .react-datepicker__input-container > input": {
      width: "100%",
      p: "13px 15px",
      fontFamily: fonts.text,
      fontWeight: 300,
      fontSize: "16px",
      border: "1px solid",
      borderColor: "text.secondary",
      borderRadius: "4px",
      "&.react-datepicker-ignore-onclickoutside": {
        border: "1px solid",
        borderColor: "accents.main",
        borderRadius: "4px",
        outline: "1px solid",
        outlineColor: "accents.main",
      },
      "&:focus-visible": {
        border: "1px solid",
        borderColor: "accents.main",
        borderRadius: "4px",
        outline: "1px solid",
        outlineColor: "accents.main",
      },
    },
    "& .react-datepicker__input-container:focus-within > .react-datepicker__calendar-icon":
      {
        p: "20px 17px 15px",
        borderLeftColor: "accents.main",
      },
    "& .react-datepicker__calendar-icon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "23px",
      p: "20px 17px 15px",
      borderRadius: "0 4px 4px 0",
      borderLeftColor: "text.secondary",
      "&.react-datepicker-ignore-onclickoutside": {
        borderLeftColor: "accents.main",
        "& .MuiBox-root > svg": {
          transform: "rotate(180deg)",
        },
      },
    },
    "& .react-datepicker__time": {
      width: "min-content",
      height: "208px",
      borderRadius: "4px",
      boxShadow: shadows.main,
      overflow: "hidden",
    },
    "& .react-datepicker__header--time, .react-datepicker__triangle": {
      display: "none",
    },
    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box":
      {
        width: "100%",
        textAlign: "left",
        minWidth: "125px",
        maxWidth: "140px",
      },
    "& .react-datepicker__time-list": {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      overflow: "hidden",
      p: "8px 0 8px",
    },
    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected":
      {
        backgroundColor: "accents.hover",
        color: "text.primary",
      },
    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover":
      {
        backgroundColor: "accents.hover",
      },
    "& .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item":
      {
        p: "12px 8px",
        height: "auto",
        fontFamily: fonts.text,
        fontWeight: 300,
        fontSize: "16px",
      },
    "& .react-datepicker__input-container > input:disabled": {
      color: "gray.disabled",
      cursor: "not-allowed",
      borderColor: "gray.disabled",
      backgroundColor: hexToRgba(colors.gray.disabled, 0),
    },
  },
  timeInputsWrapper: {
    position: "relative",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    "& > div": {
      minWidth: "125px",
      maxWidth: "140px",
    },
    "@media (min-width:450px)": {
      maxWidth: "300px",
    },
  },
  dash: {
    position: "absolute",
    display: "contents",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&::after": {
      content: "''",
      position: "absolute",
      backgroundColor: "text.primary",
      width: "9px",
      height: "1px",
      top: "48px",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  pickerIcon: (isDisabled: boolean) => ({
    color: isDisabled ? "gray.disabled" : "text.primary",
  }),
  title: (isDisabled: boolean) => ({
    color: `${isDisabled ? "text.primary" : "gray.disabled"}`,
  }),
  dateLabel: (isDisabled: boolean) => ({
    marginBottom: "5px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: `${isDisabled ? "text.primary" : "gray.disabled"}`,
  }),
  timeSelect: {
    "& > svg": {
      color: "text.secondary",
    },
  },
};
