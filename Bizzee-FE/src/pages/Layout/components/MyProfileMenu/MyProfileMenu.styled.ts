import { shadows } from "config/styles/shadows";

export const styles = {
  myProfileMenu: {
    top: "10px",
    "& .MuiMenu-paper": {
      p: "0 55px",
      borderRadius: "10px",
      boxShadow: shadows.main,
      color: "text.primary",
      "@media screen and (min-width: 768px)": {
        p: "10px 37px",
      },
    },
    zIndex: 1600,
    "& .MuiList-root.MuiList-padding": {
      padding: 0,
      my: "20px",
    },
  },
  myProfileMenuItem: {
    width: "180px",
    p: "18px 0 29px 0",
    borderColor: "green.default",
    "@media screen and (min-width: 768px)": {
      p: "14px 0",
    },
  },
  myProfileMenuTablet: {
    "&:nth-last-of-type(2)": {
      borderBottom: "1px solid",
      pb: "25px",
    },
    "&:nth-last-of-type(1)": {
      pt: "25px",
    },
  },
};
