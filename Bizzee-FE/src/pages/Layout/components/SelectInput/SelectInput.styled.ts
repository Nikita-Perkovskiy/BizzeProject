import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";
export const styles = {
  selectInputWrapper: {
    position: "relative",
    width: "100%",
  },
  selectInputLabel: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: colors.text.primary,
  },
  selectInputLabelDisabled: {
    color: "gray.disabled",
    cursor: "not-allowed",
  },
  selectInputLabelError: {
    color: colors.error.main,
  },
  selectInput: {
    width: "100%",
    "& .MuiInputBase-input": {
      p: "11px 15px",
    },
    height: "100%",
    minHeight: "50px",
    "& .MuiSelect-icon": {
      color: colors.text.secondary,
    },

    "&.Mui-disabled .MuiSelect-icon": {
      color: colors.gray.disabled,
      cursor: "not-allowed",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: colors.text.secondary,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "2px solid",
      borderColor: colors.accents.main,
    },

    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      border: "2px solid",
      borderColor: colors.error.main,
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: colors.gray.disabled,
      cursor: "not-allowed",
    },
    "& .MuiPaper": {
      root: {
        maxHeight: "200px",
        backgroundColor: colors.background.default,
        boxShadow: shadows.dropdown,
      },
    },
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: colors.text.secondary,
      },
    },
    "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.gray.disabled,
    },
  },
  placeholderText: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "28px",
    zIndex: 1,
    color: colors.text.secondary,
  },
  checkItem: {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
  },
  checkItemDisabled: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.gray.disabled,
  },
};
