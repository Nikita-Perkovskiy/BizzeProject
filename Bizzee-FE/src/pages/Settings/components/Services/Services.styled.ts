import { shadows } from "config/styles/shadows";

export const styles = {
  drawerWrapper: { zIndex: "1700 !important" },
  servicesWrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    width: "100%",
    minWidth: {
      sm: "300px",
      md: "370px",
    },
    gap: {
      sm: "20px",
      lg: "30px",
    },
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
  headerButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  headerActions: {
    display: "flex",
    gap: "40px",
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
    position: {
      sm: "relative",
      md: "absolute",
    },
    textAlign: "center",
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
    width: {
      md: "295px",
      lg: "390px",
    },
    marginTop: {
      sm: "95px",
      md: "60px",
      lg: "150px",
    },
  },
  mainContentText: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "23px",
    color: "text.secondary",
  },
  mainContentButton: {
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "center",
    marginTop: "20px",
  },
  servicesContainer: {
    "@media (min-width:1220px)": {
      width: "100%",
      display: "block",
      columns: "2 auto",
      gap: "30px",
    },
  },
  btnIconWrapper: {
    display: "flex",
    justifyContent: {
      xs: "flex-end",
      md: "flex-start",
    },
  },
  btnIcon: {
    cursor: "pointer",
  },
  serviceMenuWrapper: {
    width: { xs: "100%", md: "60%" },
    top: { xs: "60px", md: "0px" },
  },
  menuContainer: {
    padding: {
      md: "0px 40px",
      xs: "0px",
    },
  },
};
