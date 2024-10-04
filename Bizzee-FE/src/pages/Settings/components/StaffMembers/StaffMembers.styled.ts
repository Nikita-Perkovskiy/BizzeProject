import { fontSize } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  staffMembersWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    padding: {
      xs: "0",
      lg: "30px 40px",
    },
    gap: "30px",
    boxShadow: {
      xs: "none",
      lg: shadows.main,
    },
  },
  headerWrapper: {
    width: "100%",
    minWidth: {
      sm: "300px",
      md: "370px",
    },
    borderRadius: "10px",
    padding: {
      sm: "30px 20px",
      md: "30px 40px",
      lg: "0",
    },
    boxShadow: {
      xs: shadows.main,
      lg: "none",
    },
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  headerButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchWrapper: {
    marginTop: {
      sm: "20px",
      lg: "30px",
    },
  },
  mainContentWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: {
      sm: 0,
      md: "50svh",
    },
  },
  sortButtonWrapper: {
    display: "flex",
    justifyContent: {
      sm: "center",
      lg: "flex-start",
    },
    gap: "20px",
    marginBottom: {
      sm: "30px",
      md: "20px",
      lg: "40px",
    },
  },
  mainContentBlock: {
    position: "absolute",
    top: {
      md: "50%",
    },
    left: {
      md: "50%",
    },
    transform: {
      sm: "none",
      md: "translate(-50%, -50%)",
    },
    textAlign: "center",
    width: {
      md: "305px",
      lg: "390px",
    },
    marginTop: {
      sm: "80px",
      md: "60px",
      lg: "150px",
    },
  },
  mainContentText: {
    fontWeight: 400,
    fontSize: fontSize.m,
    lineHeight: "23px",
    color: colors.text.secondary,
  },
  mainContentButton: {
    marginTop: "20px",
    display: {
      xs: "none",
      md: "block",
    },
  },
  userListContainer: {
    "@media (min-width:1220px)": {
      width: "100%",
      display: "block",
      columns: "2 auto",
      gap: "30px",
    },
  },
};
