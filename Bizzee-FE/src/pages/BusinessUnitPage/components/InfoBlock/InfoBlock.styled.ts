import { shadows } from "config/styles/shadows";

export const styles = {
  wrapperBlock: {
    boxShadow: shadows.main,
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    p: {
      xs: "30px 20px",
      md: "30px 40px",
    },
    gap: "40px",
    maxWidth: "530px",
    "@media (max-width:1145px)": {
      maxWidth: "100%",
    },
  },
  imageBlock: {
    height: "80px",
  },
  imageMap: {
    width: "100%",
    height: "100%",
    borderRadius: "0",
  },
  infoWrapper: {
    display: "flex",
    justifyContent: "space-between",
    height: "min-content",
    gap: "40px",
    "@media (max-width: 500px)": {
      flexDirection: "column",
      gap: "20px",
    },
    "@media (max-width:1145px)": {
      justifyContent: "start",
    },
  },
  workingWrapper: {
    display: "flex",
    width: "220px",
    "@media (max-width: 500px)": {
      width: "100%",
      alignItems: "center",
    },
  },
  contactWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};
