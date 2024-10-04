import { shadows } from "config/styles/shadows";

export const styles = {
  unitsWorkingHoursWrapper: {
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

  headerunitsWrapper: {
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

  workingHoursActions: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "30px",
      md: "40px",
    },
  },

  settingsWeekWrapper: {
    display: "flex",
    flexDirection: "column",
    mt: {
      xs: "30px",
      md: "40px",
    },
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

    gap: {
      xs: "20px",
      lg: "30px",
    },
    borderRadius: "10px",
    boxShadow: {
      xs: "none",
      md: shadows.main,
    },
    p: {
      md: "30px 40px",
    },
  },

  daysWrapperCenter: {
    alignItems: "center",
  },

  daysWrapperNormal: {
    alignItems: "normal",
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
};
