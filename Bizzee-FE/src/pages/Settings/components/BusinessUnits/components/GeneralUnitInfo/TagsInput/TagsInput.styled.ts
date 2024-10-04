import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  autocompleteWrapper: {
    width: "100%",
  },
  autocompleteLabel: {
    marginBottom: "4px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: colors.text.primary,
  },
  autocompleteInput: {
    "& .MuiTextField-root": {
      "& .MuiAutocomplete-inputRoot": {
        paddingRight: "16px",
      },
    },
    "& .MuiOutlinedInput-root": {
      border: "none",
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputBase-root": {
      display: "flex",
      alignItems: "center",
      padding: "6px 16px 6px 9px",
      border: "1px solid",
      borderColor: colors.text.secondary,
      "&.MuiOutlinedInput-root": {
        paddingRight: "16px",
      },
      "&.Mui-focused": {
        border: "2px solid",
        borderColor: colors.accents.main,
        paddingRight: "16px",
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
    "& .MuiInputBase-input-MuiOutlinedInput-input": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      color: colors.text.primary,
    },
    maxWidth: {
      xs: "100%",
      md: "300px",
    },
  },
  customScrollbar: {
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "118px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: colors.text.secondary,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: colors.background.default,
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
  tagsInvisible: {
    display: "none",
  },
  autocompleteOptionWrapper: {
    height: "40px",
    borderRadius: "10px",
    padding: "0px 5px 0px 10px",
    boxShadow: shadows.main,
    display: "flex",
    alignItems: "center",
  },
  autocompleteOptionItem: {
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: `${colors.background.default} !important`,
  },
  autocompleteOptionText: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.text.primary,
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  autocompleteOptionTextSelect: {
    fontWeight: "700",
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
      "&::first-letter": {
        textTransform: "uppercase",
      },
    },
  },
  checkIconWrapper: {
    ml: "auto",
  },
  textInput: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.text.primary,
    cursor: "pointer",
    "& .MuiInput-root": {
      mt: "0px",
    },
  },
  paperWrapper: {
    width: "100%",
    backgroundColor: colors.background.default,
    boxShadow: shadows.dropdown,
    cursor: "pointer",
    position: "absolute",
    zIndex: 1,
    "& .MuiAutocomplete-listbox > .MuiAutocomplete-option.Mui-focused": {
      backgroundColor: "accents.hover",
    },
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
