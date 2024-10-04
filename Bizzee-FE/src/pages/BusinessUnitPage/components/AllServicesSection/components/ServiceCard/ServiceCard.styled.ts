import { shadows } from "config/styles/shadows";

export const styles = {
  wrapperCard: {
    borderRadius: "10px",
    boxShadow: shadows.main,
    p: "20px 40px",
    "@media (max-width: 548px)": {
      p: "20px",
    },
  },
  mainBlock: {
    display: "flex",
    justifyContent: "space-between",
    height: "50px",
    alignItems: "center",
    "@media (max-width: 548px)": {
      justifyContent: "center",
      flexDirection: "column",
      height: "auto",
    },
  },
  blockBook: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media (max-width: 548px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  blockTitle: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    "@media (max-width: 548px)": {
      width: "100%",
      justifyContent: "start",
    },
  },
  priceHourBlock: {
    width: "content",
    display: "flex",
    "@media (max-width: 548px)": {
      my: "19px",
      width: "260px",
    },
  },
  blockTime: {
    width: "content",
    maxWidth: "70px",
    "@media (max-width: 548px)": {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      maxWidth: "none",
    },
  },
  priceBlock: {
    display: "flex",
    fontSize: "20px",
    marginRight: "20px",
    alignItems: "center",
    "@media (max-width: 548px)": {
      flexGrow: 1,
      margin: "0",
      justifyContent: "center",
    },
  },
  linkMore: {
    cursor: "pointer",
    marginLeft: "8px",
  },
  title: {
    maxHeight: "50px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
    flexGrow: 1,
    "@media (max-width: 548px)": {
      maxHeight: "70px",
      alignItems: "center",
    },
  },
  verticalDivider: {
    width: "0.5px",
    height: "100%",
    float: "left",
    bgcolor: "rgba(138, 138, 138, 1)",
  },

  duration: {
    minWidth: "content",
    whiteSpace: "wrap",
    textAlign: "center",
    mx: "5px",
    width: "50px",
    "@media (max-width: 548px)": {
      flexGrow: 1,
    },
  },
  bookButton: {
    width: "120px",
    p: "15px 44px",
    "@media (max-width: 548px)": {
      width: "100%",
      maxWidth: "260px",
    },
  },
  skeletonButton: {
    width: "200px",
    height: "50px",
    "@media (max-width: 548px)": {
      mt: "15px",
      height: "50px",
      width: "230px",
    },
  },
  skeletonHours: {
    mt: "20px",
    height: "30px",
    width: "200px",
  },
  skeletonTitle: {
    height: "20px",
    width: "120px",
  },
  blockDescription: {
    color: "text.secondary",
    overflow: "hidden",
    transition: "all 0.35s ease",
  },
  description: {
    mt: "10px",
  },
};
