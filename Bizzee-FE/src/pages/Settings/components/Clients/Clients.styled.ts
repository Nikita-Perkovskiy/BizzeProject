import { shadows } from "config/styles/shadows";

export const styles = {
  clientsWrapper: {
    position: "relative",
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
  },
  shareButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    border: "1px solid",
    marginRight: "30px",
    width: "50px",
    height: "50px",
  },
};
