import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  autocompleteLabel: {
    marginBottom: "4px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: colors.text.primary,
  },
  inputWrapper: {
    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      color: colors.text.primary,
    },
    "&.Mui-error": {
      borderColor: colors.error.main,
    },
    ".MuiInputLabel-root": {
      transform: "scale(1)",
    },
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .MuiOutlinedInput-root": {
      padding: "0px",
      border: "none",
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputBase-root": {
      display: "flex",
      alignItems: "center",
      border: "1px solid",
      borderColor: colors.text.secondary,
      "&.MuiOutlinedInput-root>.MuiInputBase-input": {
        padding: "14px 16px",
        fontSize: "16px",
        lineHeight: "24px",
      },
      "&.Mui-focused": {
        border: "2px solid",
        borderColor: colors.accents.main,
      },
      "&.Mui-error": {
        border: "2px solid",
        borderColor: colors.error.main,
        paddingRight: "16px",
      },
      "&.Mui-disabled": {
        borderColor: colors.gray.disabled,
        cursor: "not-allowed",
        paddingRight: "16px",
      },
    },
    "& .MuiIconButton-root": {
      borderColor: colors.background.default,
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&:focus": {
        outline: "none",
      },
    },
    "& .MuiInput-root": {
      mt: "0px",
    },
    "& .MuiInputBase-input-MuiOutlinedInput-input": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      color: colors.text.primary,
    },
    width: {
      xs: "100%",
      md: "300px",
    },
  },
  autocompleteOptionBlockWrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    mt: {
      xs: "34px",
      lg: "25px",
    },
    "& .MuiAutocomplete-listbox > .MuiAutocomplete-option.Mui-focused": {
      backgroundColor: "accents.hover",
    },
  },
  servicesInvisible: {
    display: "none",
  },
  autocompleteChipItem: {
    fontFamily: fonts.text,
    padding: "0px 15px 0px 10px",
    height: "40px",
    margin: "5px",
    borderRadius: "10px",
    backgroundColor: colors.background.default,
    boxShadow: shadows.main,
    display: "flex",
    alignItems: "center",
    "& .MuiChip-label": {
      margin: "0px 8px 0px 0px",
      pl: "0px",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: colors.text.primary,
    },
  },
  icon: {
    cursor: "pointer",
  },
  addButtonWrapper: {
    display: "flex",
    justifyContent: {
      md: "start",
    },
    mt: {
      xs: "4px",
      lg: "20px",
    },
  },
  submitBtn: {
    width: {
      xs: "100%",
      md: "130px",
    },
    height: "50px",
    mt: {
      xs: "20px",
    },
  },
};
