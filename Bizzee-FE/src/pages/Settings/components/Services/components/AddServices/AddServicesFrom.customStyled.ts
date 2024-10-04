import { colors } from "config/styles/themeColors";

export const customTextAreaStyles = {
  textAreaWrapper: {
    position: "relative",
  },
  textAreaLabel: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: colors.text.primary,
  },
  textAreaInput: {
    "& .MuiOutlinedInput-root": {
      border: "none",
      "& fieldset": {
        border: "none",
      },
      "& ::placeholder": {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "28px",
        zIndex: 1,
        opacity: 1,
        filter: "none",
        color: `${colors.text.secondary} !important`,
      },
    },
    "& .MuiInputBase-root": {
      padding: "10px 16px 20px 16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "100%",
      minHeight: "128px",
      border: "1px solid",
      borderColor: colors.text.secondary,
      borderRadius: "4px",
      color: colors.text.primary,
      "&.Mui-focused": {
        border: "2px solid",
        borderColor: colors.accents.main,
        outline: "none",
      },
      "&.Mui-error": {
        border: "1px solid",
        borderColor: colors.error.main,
      },
      "&.Mui-disabled": {
        borderColor: colors.gray.disabled,
        cursor: "not-allowed",
      },
    },
    "& .MuiInput-input": {
      border: "none",
      "&::placeholder": {
        color: colors.text.secondary,
      },
      "&.Mui-disabled": {
        cursor: "not-allowed",
      },
    },
    "& .MuiInput-input.Mui-disabled ": {
      color: colors.gray.disabled,
    },
  },
  counterStyles: {
    position: "absolute",
    bottom: "14px",
    right: "8px",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.text.primary,
  },
};
