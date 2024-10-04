import { shadows } from "config/styles/shadows";

export const styles = {
  menu: {
    top: "-8px",
    left: "-15px",
    "& .MuiPaper-root": {
      width: {
        sm: "275px",
        lg: "315px",
      },
      borderRadius: "10px",
      boxShadow: shadows.main,
    },
  },
};
