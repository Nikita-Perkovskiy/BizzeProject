import { hexToRgba } from "utils/hexToRgba";
import { colors } from "config/styles/themeColors";
import { shadows } from "config/styles/shadows";

export const styles = {
  appointmentsWrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: {
      xs: "10px",
      md: "none",
      lg: "10px",
    },
    padding: {
      xs: "30px 20px",
      lg: "30px 40px",
    },
    m: {
      md: "-40px 0 0",
      lg: 0,
    },
    boxShadow: {
      xs: shadows.main,
      md: "none",
      lg: shadows.main,
    },
    overflow: "auto",
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
  headerButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  headline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
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
  filtersWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: {
      sm: "column",
      md: "row",
    },
    gap: "20px",
  },
  smartSearch: {
    width: {
      xs: "100%",
      md: "calc(50% - 10px)",
      lg: "calc(33% - 10px)",
    },
  },
  menuWrapper: ({
    isAbsent,
    isCompleted,
    isConfirmed,
  }: {
    isAbsent: boolean;
    isCompleted: boolean;
    isConfirmed: boolean;
  }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    mt: "5px",
    "& > :last-child": {
      marginLeft: "auto",
    },
    "&:not(:last-child)": {
      mb: "5px",
    },
    backgroundColor: isAbsent
      ? hexToRgba(colors.error.absent, 0.1)
      : isCompleted && isConfirmed
      ? "inherit"
      : "inherit",
  }),
  masterName: {
    width: "100%",
    fontWeight: 400,
    overflow: "hidden",
    position: "relative",
    whiteSpace: "nowrap",
    "&.Mui-selected": {
      fontWeight: 700,
      backgroundColor: "transparent",
    },
    backgroundColor: "transparent",
    "&.MuiMenuItem-root:hover": {
      backgroundColor: "transparent",
    },
    "& > p:hover": {
      fontWeight: 700,
    },
  },
  roundMasterColor: (color: string) => ({
    ml: "15px",
    minWidth: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: `#${color}`,
  }),
  chevronRight: {
    p: 0,
    mr: "20px",
    "& > svg": {
      color: "text.primary",
      width: "20px",
      transform: "rotate(-90deg)",
    },
  },
  createButtonWrapper: {
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: "70px",
    left: "20px",
    right: "20px",
    "@media (min-width:767px)": {
      position: "absolute",
      top: "290px",
    },
  },
  detailsMenu: {
    left: "5px",
    "& .MuiPaper-root": {
      width: "360px",
      minHeight: "365px",
      maxHeight: "370px",
      borderRadius: "10px",
      boxShadow: shadows.main,
    },
  },
  detailsNestedMenu: {
    "& .MuiPaper-root": {
      position: {
        md: "absolute",
      },
      left: {
        md: 0,
      },
      rigth: {
        md: 0,
      },
      top: {
        sm: "50px",
        md: 0,
      },
      p: 0,
    },
  },
  menuItemsWrapper: {
    p: {
      md: "20px 30px",
    },
    maxHeight: {
      sm: "80%",
      md: "270px",
    },
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
};
