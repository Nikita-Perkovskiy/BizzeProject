import { colors } from "config/styles/themeColors";

export const styles = {
  dayWeekPicker: {
    "& .react-datepicker__day--disabled": {
      color: `${colors.gray.disabled} !important`,
      "&:hover": {
        backgroundColor: `${colors.background.default} !important`,
      },
    },
    "& .react-datepicker__day:first-of-type": {
      borderTopLeftRadius: "50% !important",
      borderBottomLeftRadius: "50% !important",
    },
    "& .react-datepicker__day--weekend:last-of-type": {
      borderTopRightRadius: "50% !important",
      borderBottomRightRadius: "50% !important",
    },
    "& .react-datepicker__day--keyboard-selected, .react-datepicker__day--selected, .react-datepicker__day--in-range":
      {
        position: "relative",
        backgroundColor: "accents.main",
        color: "background.default",
        outline: "none",
      },
    "& .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range)":
      {
        backgroundColor: "accents.hover",
      },
    "& .react-datepicker__day--selected:hover": {
      backgroundColor: "accents.hover",
    },
    "& .past-day": {
      color: "gray.disabled",
    },
    "& .react-datepicker__day--selected span": {
      position: "relative",
      color: "background.default",
      zIndex: 10,
    },
    "& .react-datepicker__day--selected::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "accents.main",
      borderRadius: "50%",
      zIndex: 2,
    },
    "& .react-datepicker__day--selected::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "accents.hover",
      borderTopLeftRadius: "50% !important",
      borderBottomLeftRadius: "50% !important",
      zIndex: 1,
    },
    "& .react-datepicker__day--selected.single-day::after": {
      content: "none",
    },
    "& .react-datepicker__day--selected:last-of-type::after": {
      content: "none",
    },
    "& .next-week-day": {
      backgroundColor: "accents.hover",
      color: "text.primary",
      borderRadius: "0% !important",
    },
    "& .next-week-day:first-of-type": {
      borderRadius: "50%",
    },
    "& .next-week-day:last-of-type": {
      borderTopRightRadius: "50% !important",
      borderBottomRightRadius: "50% !important",
    },
    "& .single-day": {
      borderRadius: "50% !important",
    },
    "& .react-datepicker__navigation": {
      top: "14px",
    },
    "& .react-datepicker__today-button": {
      p: "15px 30px",
      m: "0 60px 15px",
      border: `1px solid ${colors.text.secondary}`,
      borderRadius: "6px",
      backgroundColor: "transparent",
    },
    "& .react-datepicker__day--selected.react-datepicker__day--today": {
      border: "none",
    },
    "& .first-week-day": {
      borderTopLeftRadius: "50% !important",
      borderBottomLeftRadius: "50% !important",
    },
    "& .last-week-day": {
      borderTopRightRadius: "50% !important",
      borderBottomRightRadius: "50% !important",
    },
  },
};
