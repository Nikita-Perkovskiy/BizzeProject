import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  pageWrapper: {
    marginTop: {
      xs: "30px",
      md: "40px",
    },
    padding: {
      xs: "5px 5px",
      ["@media (min-width: 420px)"]: {
        padding: "30px 40px",
      },
      lg: "30px 40px",
    },
    height: "100%",
    borderRadius: {
      xs: "0px",
      ["@media (min-width: 420px)"]: {
        borderRadius: "10px",
      },
    },
    boxShadow: {
      xs: "none",
      ["@media (min-width: 420px)"]: {
        boxShadow: shadows.main,
      },
    },
    overflow: "hidden",
  },
  pageHeader: {
    padding: {
      xs: "30px 40px",
      ["@media (min-width: 420px)"]: {
        padding: "0px",
      },
    },
    marginBottom: {
      xs: "30px",
      md: "40px",
      lg: "30px",
    },
    borderRadius: {
      xs: "10px",
      ["@media (min-width: 420px)"]: {
        borderRadius: "0px",
      },
    },
    boxShadow: {
      xs: shadows.main,
      ["@media (min-width: 420px)"]: {
        boxShadow: "none",
      },
    },
    overflow: "hidden",
  },
  pageHeaderTitleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "5px",
    marginBottom: {
      ["@media (max-width: 420px)"]: {
        marginBottom: "20px",
      },
      md: "30px",
    },
  },
  pageHeaderTitle: {
    marginBottom: {
      xs: "5px",
      lg: "10px",
    },
    fontWeight: "600",
    fontSize: "24px",
    textTransform: "uppercase",
    color: colors.text.primary,
  },
  pageContent: {
    fontWeight: "300",
    fontSize: "16px",
    color: colors.text.secondary,
  },
  pageCategoryWrapper: {
    overflow: "hidden",
    marginBottom: {
      ["@media (max-width: 420px)"]: {
        marginBottom: "20px",
      },
      md: "30px",
    },
  },
  filterButtonListWrapper: {
    marginBottom: "50px",
  },
  emptyPageWrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyMessage: {
    maxWidth: "400px",
    textAlign: "center",
  },
  cardBlockWrapper: {
    marginBottom: {
      xs: "50px",
      md: "100px",
    },
    "@media (min-width:1220px)": {
      width: "100%",
      display: "block",
      columns: "2 auto",
      gap: "30px",
    },
    borderRadius: {
      xs: "10px",
      ["@media (min-width: 420px)"]: {
        borderRadius: "0px",
      },
    },
    boxShadow: {
      xs: shadows.main,
      ["@media (min-width: 420px)"]: {
        boxShadow: "none",
      },
    },
    overflow: "hidden",
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: {
      xs: "center",
      ["@media (min-width: 420px)"]: {
        justifyContent: "flex-end",
      },
    },
  },
  saveButton: {
    padding: "16px 44px 16px 44px",
    borderRadius: "6px",
    cursor: "pointer",
    width: {
      xs: "100%",
      ["@media (min-width: 420px)"]: {
        width: "180px",
      },
    },
  },
};
