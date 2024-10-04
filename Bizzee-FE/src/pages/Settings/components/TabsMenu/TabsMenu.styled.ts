import { fontSize } from "config/styles/fonts";

export const styles = {
  tabsWrapper: {
    position: "relative",
    width: "100%",
    fontSize: fontSize.s,
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "text.primary",
      height: 2,
    },
    "@media (min-width:1920px)": {
      "& .MuiTabs-flexContainer": {
        display: "flex",
        justifyContent: "center",
      },
    },
  },
  tab: {
    minWidth: {
      sm: "125px",
      lg: "187px",
    },
    p: "10px 16px",
    textTransform: "capitalize",
    "&.Mui-selected": {
      color: "text.primary",
    },
  },
  tabName: {
    fontWeight: 300,
  },
  divider: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    color: "text.secondary",
  },
};
