import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";

export const styles = {
  wrapper: {
    height: "40px",
    padding: "0px 10px",
    backgroundColor: "background.default",
    borderRadius: "10px",
    boxShadow: shadows.main,
    fontSize: "14px",
    fontFamily: fonts.text,
    "&.Mui-disabled": {
      opacity: 1,
      bgcolor: "gray.tagDisabled",
      color: "text.secondary",
    },
    "& .MuiChip-label": {
      p: 0,
    },
    "& .MuiChip-deleteIcon": {
      color: "text.primary",
      m: 0,
      "&:hover": {
        color: "accents.hover",
      },
      "&:focus": {
        color: "accents.hover",
      },
      "&:disabled": {
        color: "gray.disabled",
        bgcolor: "text.secondary",
      },
    },
  },
  modalIconClose: {
    width: "20px",
    height: "20px",
    p: 0,
    "&:hover": {
      bgcolor: "unset",
    },
    "&:disabled.MuiButtonBase-root.Mui-disabled": {
      bgcolor: "unset",
    },
  },
};
