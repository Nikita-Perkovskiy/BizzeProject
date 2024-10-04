import { shadows } from "config/styles/shadows";

export const styles = {
  staffWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "50px",
    borderRadius: "10px",
    padding: {
      xs: "30px 10px 50px",
      lg: "30px 40px",
    },
    boxShadow: {
      xs: "none",
      lg: shadows.main,
    },
  },
  actionsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    with: "100%",
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
  contentWrapper: {
    minHeight: {
      sm: 0,
      md: "50svh",
    },
  },
  cardContainer: {
    "@media (min-width:1220px)": {
      width: "100%",
      display: "block",
      columns: "2 auto",
      gap: "30px",
    },
  },
  messageBlock: {
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
  messageText: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "23px",
    color: "text.secondary",
  },
  updateButtonWrapper: {
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: "70px",
    left: "20px",
    right: "20px",
    "@media (min-width:768px)": {
      position: "static",
      marginTop: "50px",
      justifyContent: "end",
    },
  },
  updateButton: {
    p: "17px 44px",
    width: "320px",
    "@media (min-width:768px)": {
      width: "130px",
    },
  },
};
