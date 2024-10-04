import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";

export const styles = {
  mobileCalendarWrapper: {
    "& .rbc-events-container": {
      display: "none",
      px: 0,
      pt: "2px",
      pb: "2px",
      backgroundColor: "background.default",
      border: "none",
    },
    "& .rbc-time-header": {
      display: "none",
    },
    "& .rbc-time-view": {
      border: "none",
    },
    "& .rbc-time-content": {
      border: "none",
      gap: "7px",
    },
    "& .rbc-timeslot-group": {
      border: "none",
      borderRadius: "5px",
    },
    "& .rbc-time-column": {
      gap: "8px",
    },
    "& .rbc-time-gutter": {
      width: {
        xs: "75px",
      },
    },
    "& .rbc-time-slot": {
      textAlign: "center",
    },
    "& .rbc-label": {
      fontFamily: fonts.text,
    },
    "& .rbc-day-slot": {
      maxWidth: "calc(100% - 83px)",
    },
    "& .rbc-today": {
      bgcolor: "unset",
    },
    "& .rbc-current-time-indicator": {
      display: "none",
    },
  },
  desktopCalendarWrapper: {
    height: {
      md: 635,
      lg: 775,
    },
    "& .rbc-time-header-gutter": {
      width: {
        md: "80px !important",
      },
      maxWidth: {
        md: "80px !important",
      },
      minWidth: {
        md: "80px !important",
      },
    },
    "& .rbc-allday-cell": {
      display: "none",
    },
    "& .rbc-time-view": {
      border: "none",
    },
    "& .rbc-time-content": {
      border: "none",
      gap: "7px",
      pr: "5px",
      "::-webkit-scrollbar": {
        width: "5px",
        height: "5px",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "5px",
        backgroundColor: "accents.main",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "scroll.background",
      },
    },
    "& .rbc-timeslot-group": {
      border: "none",
      borderRadius: "5px",
    },
    "& .rbc-time-column": {
      gap: "8px",
    },
    "& .rbc-time-gutter": {
      width: {
        md: "12%",
      },
    },
    "& .rbc-time-slot": {
      textAlign: "center",
    },
    "& .rbc-label": {
      fontFamily: fonts.text,
    },
    "& .rbc-today": {
      bgcolor: "unset",
    },
    "& .rbc-current-time-indicator": {
      display: "none",
    },
    "& .rbc-time-header": {
      border: "none",
      height: "90px",
      mb: "10px",
      mr: "0px !important",
      pr: "10px",
      borderRadius: "10px",
      boxShadow: shadows.main,
      transform: "translateY(-10px)",
      bgcolor: "background.default",
    },
    "& .rbc-time-header-content": {
      border: "none",
    },
    "& .rbc-header": {
      p: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
    },
  },
  desktopCalendarWeekWrapper: {
    "& .rbc-time-header-gutter": {
      width: {
        lg: "120px !important",
      },
      maxWidth: {
        lg: "120px !important",
      },
      minWidth: {
        lg: "120px !important",
      },
    },
    "& .rbc-time-gutter": {
      width: {
        lg: "120px",
      },
    },
    "& .rbc-events-container": {
      display: "none",
    },
    "& .rbc-time-header-cell": {
      height: "100%",
    },
    "& .rbc-button-link > span[role='columnheader']": {
      color: "accents.main",
      fontFamily: fonts.text,
      fontWeight: 700,
      fontSize: "16px",
    },
    "& .rbc-day-slot": {
      maxWidth: {
        md: "calc((100% - 105px) / 7)",
        lg: "calc((100% - 160px) / 7)",
      },
    },
  },
  desktopCalendarDayWrapper: {
    "& .rbc-time-header-gutter": {
      border: "none",
      width: {
        lg: "135px !important",
      },
      maxWidth: {
        lg: "135px !important",
      },
      minWidth: {
        lg: "135px !important",
      },
    },
    "& .rbc-time-header-content": {
      margin: "0 !important",
      maxWidth: {
        md: "calc((100% - 65px) / 4)",
        lg: "calc((100% - 135px) / 4)",
      },
      minWidth: {
        md: "140px",
        lg: "215px",
      },
    },
    "& .rbc-header": {
      minWidth: {
        md: "140px",
        lg: "215px",
      },
    },
    "& .rbc-row-resource": {
      height: "100%",
      border: "none !important",
      minWidth: {
        md: "140px",
        lg: "215px",
      },
    },
    "& .rbc-time-gutter": {
      width: {
        lg: "135px",
      },
      border: "none",
    },
    "& .rbc-events-container": {
      border: "none",
      margin: 0,
      pointerEvents: "none",
    },
    "& .rbc-event-label": {
      display: "none",
    },
    "& .rbc-event": {
      px: 0,
      pt: "2px",
      pb: "2px",
      backgroundColor: "background.default",
      border: "none",
    },
    "& .rbc-time-header.rbc-overflowing": {
      gap: "7px",
    },
  },
};
