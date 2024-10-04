import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  autocompletWrapper: {
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
    "& .MuiOutlinedInput-root": {
      border: "none",
      "& fieldset": {
        border: "none",
      },
    },
    "& .MuiInputBase-root": {
      display: "flex",
      alignItems: "center",
      padding: "6px 39px 6px 9px",
      border: "1px solid",
      borderColor: colors.text.secondary,
      "&.Mui-focused": {
        border: "2px solid",
        borderColor: colors.accents.main,
      },
      "&.Mui-error": {
        border: "2px solid",
        borderColor: colors.error.main,
      },
      "&.Mui-disabled": {
        borderColor: colors.gray.disabled,
        cursor: "not-allowed",
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
      md: "320px",
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
    "& .MuiAutocomplete-listbox > .MuiAutocomplete-option.Mui-focused": {
      backgroundColor: "accents.hover",
    },
    mt: {
      xs: "14px",
      lg: "0px",
    },
  },
  selectedInvisible: {
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
    "&.MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
      backgroundColor: colors.background.default,
    },
    "&.MuiAutocomplete-option[aria-selected='true']": {
      backgroundColor: "unset",
    },
  },
  autocompleteOptionText: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.text.primary,
  },
  autocompleteOptionTextSelect: {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
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
  autocompleteSvgWrapper: {
    marginLeft: "10px",
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  checkIconWrapper: {
    ml: "auto",
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
  textInput: {
    "& input::placeholder": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "28px",
      zIndex: 1,
      opacity: 1,
      filter: "none",
      color: `${colors.text.secondary} !important`,
    },
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.text.primary,
    cursor: "pointer",
  },
};
