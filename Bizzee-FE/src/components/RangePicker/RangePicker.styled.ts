import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";
import { fontSize } from "config/styles/fonts";

export const styles = {
  datePicker: (isDisabled?: boolean) => ({
    "& .datepicker-container": {
      fontFamily: fonts.text,
      fontWeight: 700,
      fontSize: fontSize.m,
      lineHeight: "16px",
      maxWidth: "fit-content",
      p: "12px 11px 5px",
    },
    "& .react-datepicker": {
      border: "none",
      boxShadow: shadows.main,
      borderRadius: "10px",
    },
    "& .react-datepicker__current-month": {
      color: `${isDisabled ? "text.primary" : "gray.disabled"}`,
      mb: "13px",
      fontSize: fontSize.m,
      fontWeight: 700,
    },
    "& .react-datepicker__day-names": {
      fontWeight: 600,
      lineHeight: "20px",
    },
    "& .react-datepicker__week": {
      display: "flex",
      fontWeight: 300,
      lineHeight: "23.17px",
    },
    "& .react-datepicker__week:not(:last-child)": {
      mb: "8px",
    },
    "& .react-datepicker__day": {
      position: "relative",
      pt: "5px",
      width: "38px !important",
      height: "38px !important",
      margin: "0 !important",
      borderRadius: "50%",
      color: `${isDisabled ? "text.primary" : "gray.disabled"}`,
    },
    "& .react-datepicker__day--today": {
      position: "relative",
      pt: "4px",
      width: "38px !important",
      height: "38px !important",
      margin: "0 !important",
      border: "solid 1px",
      borderColor: "accents.main",
      borderRadius: "50% !important",
    },
    "& .react-datepicker__day-name": {
      width: "38px !important",
      height: "38px !important",
      margin: "0 !important",
      borderRadius: "50%",
      color: `${isDisabled ? "text.primary" : "gray.disabled"}`,
    },
    "& .react-datepicker__header": {
      backgroundColor: "background.default",
      borderBottom: "none",
    },
    "& .react-datepicker__day:hover": {
      backgroundColor: "accents.hover",
      color: "text.primary",
    },
    "& .react-datepicker__day--outside-month": {
      visibility: "hidden",
    },
    "& .react-datepicker__triangle": {
      display: "none",
    },
    "& .react-datepicker__navigation": {
      top: "14px",
    },
    "& .react-datepicker__navigation-icon--next::before, .react-datepicker__navigation-icon--previous::before":
      {
        height: "9px",
        width: "9px",
        borderColor: `${isDisabled ? "text.primary" : "gray.disabled"}`,
        borderWidth: "1.5px 1.5px 0 0",
      },
    "& .react-datepicker__month": {
      mb: "18px",
    },
    "& .chosen-date": {
      backgroundColor: "gray.tagDisabled",
      fontWeight: 700,
    },
  }),
  rangePicker: {
    "& .react-datepicker__day--in-range.react-datepicker__day--today": {
      border: "none",
    },
    "& .react-datepicker__day--in-selecting-range.react-datepicker__day--today":
      {
        border: "none",
        borderRadius: "0 !important",
      },
    "& .react-datepicker__day--in-selecting-range.react-datepicker__day--today.react-datepicker__day--selecting-range-end":
      {
        borderRadius: "50% !important",
      },
    "& .react-datepicker__day--in-selecting-range.react-datepicker__day--today.react-datepicker__day--selecting-range-start":
      {
        borderRadius: "50% !important",
      },
    "& .react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--range-end.react-datepicker__day--in-range.react-datepicker__day--today::after":
      {
        content: "none",
      },
    "& .first-week-day.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-end::after":
      {
        content: "none",
      },
    "& .react-datepicker__day--in-selecting-range": {
      backgroundColor: "accents.hover",
      borderRadius: "0",
    },
    "& .react-datepicker__day--selecting-range-start": {
      borderRadius: "50% !important",
    },
    "& .react-datepicker__day--selecting-range-end": {
      borderRadius: "50% !important",
    },
    "& .react-datepicker__day--selecting-range-end::before, .react-datepicker__day--selecting-range-start::before":
      {
        borderRadius: "50% !important",
        width: "100%",
        content: "''",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: "1 !important",
        backgroundColor: `${colors.accents.main} !important`,
      },
    "& .react-datepicker__day--selecting-range-start::after": {
      width: "50%",
      content: "''",
      height: "100%",
      position: "absolute",
      left: "50%",
      top: 0,
      zIndex: "0 !important",
      backgroundColor: `${colors.accents.hover} !important`,
    },
    "& .react-datepicker__day--selecting-range-end::after": {
      width: "50%",
      content: "''",
      height: "100%",
      position: "absolute",
      right: "50%",
      top: 0,
      zIndex: "0 !important",
      backgroundColor: `${colors.accents.hover} !important`,
    },
    "& .react-datepicker__day--selecting-range-end span": {
      position: "absolute",
      right: 0,
      left: 0,
      zIndex: 5,
      color: `${colors.background.default} !important`,
    },
    "& .react-datepicker__day--selecting-range-start span": {
      position: "absolute",
      right: 0,
      left: 0,
      zIndex: 5,
      color: `${colors.background.default} !important`,
    },
    "& .react-datepicker__day--keyboard-selected, .react-datepicker__day--selected, .react-datepicker__day--in-range":
      {
        position: "relative",
        backgroundColor: "accents.main",
        color: "background.default",
        outline: "none",
      },
    "& .react-datepicker__day--in-range": {
      backgroundColor: "accents.hover",
      borderRadius: "0 !important",
      color: "text.primary",
    },
    "& .react-datepicker__day--range-end, .react-datepicker__day--range-start":
      {
        position: "relative",
        top: 0,
        backgroundColor: `${colors.accents.main} !important`,
        borderRadius: "50% !important",
      },
    "& .react-datepicker__day--range-end span": {
      position: "absolute",
      right: 0,
      left: 0,
      zIndex: 5,
      color: `${colors.background.default} !important`,
    },
    "& .react-datepicker__day--selected:last-of-type::after": {
      content: "none",
    },
    "& .react-datepicker__day--range-start span": {
      position: "absolute",
      right: 0,
      left: 0,
      zIndex: 5,
      color: `${colors.background.default} !important`,
    },
    "& .react-datepicker__day--selecting-range-start.react-datepicker__day--selecting-range-end::after":
      {
        content: "none",
        borderRadius: "50% !important",
      },
    "& .react-datepicker__day--range-end::before, .react-datepicker__day--range-start::before":
      {
        borderRadius: "50% !important",
        width: "100%",
        content: "''",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: "1 !important",
        backgroundColor: `${colors.accents.main} !important`,
      },
    "& .react-datepicker__day--range-start::after": {
      width: "50%",
      content: "''",
      height: "100%",
      position: "absolute",
      left: "50%",
      top: 0,
      zIndex: "0 !important",
      backgroundColor: `${colors.accents.hover} !important`,
    },
    "& .react-datepicker__day--range-end::after": {
      width: "50%",
      content: "''",
      height: "100%",
      position: "absolute",
      right: "50%",
      top: 0,
      zIndex: "0 !important",
      backgroundColor: `${colors.accents.hover} !important`,
    },
    "& .first-week-day": {
      borderTopLeftRadius: "50% !important",
      borderBottomLeftRadius: "50% !important",
    },
    "& .last-week-day": {
      borderTopRightRadius: "50% !important",
      borderBottomRightRadius: "50% !important",
    },
    "& .first-week-day.react-datepicker__day--range-end.react-datepicker__day--in-range::after":
      {
        content: "none",
      },
    "& .chosen-date.chosen-weekend": {
      backgroundColor: "inherit",
      fontWeight: 400,
    },
    "& .chosen-date.chosen-weekend.react-datepicker__day--in-selecting-range": {
      backgroundColor: `${colors.accents.hover} !important`,
    },
    "& .chosen-date.chosen-weekend.react-datepicker__day--in-range": {
      backgroundColor: `${colors.accents.hover} !important`,
    },
    "& .chosen-date.react-datepicker__day--in-selecting-range": {
      fontWeight: 400,
    },
    "& .chosen-date.react-datepicker__day--in-range": {
      fontWeight: 400,
    },
    "& .react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--range-end.react-datepicker__day--in-range::after":
      {
        content: "none",
      },
    "& .first-week-day.react-datepicker__day--in-selecting-range.react-datepicker__day--today":
      {
        borderTopLeftRadius: "50% !important",
        borderBottomLeftRadius: "50% !important",
      },
    "& .last-week-day.react-datepicker__day--in-selecting-range.react-datepicker__day--today":
      {
        borderTopRightRadius: "50% !important",
        borderBottomRightRadius: "50% !important",
      },
    "& input::placeholder": {
      color: "gray.disabled",
    },
  },
};
