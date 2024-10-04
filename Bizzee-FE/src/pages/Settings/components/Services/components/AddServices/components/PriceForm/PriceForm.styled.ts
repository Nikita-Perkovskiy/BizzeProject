import { colors } from "config/styles/themeColors";
export const styles = {
  itemLeftWrapper: {
    paddingRight: {
      xs: "5px",
    },
  },
  itemRightWrapper: {
    paddingLeft: {
      xs: "5px",
    },
  },
  priceFormWrapper: {
    gap: "20px",
  },
  inputWrapper: {
    width: "100%",
    maxWidth: "320px",
    "& ::placeholder": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "28px",
      zIndex: 1,
      opacity: 1,
      filter: "none",
      color: `${colors.text.secondary} !important`,
    },

    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      color: "text.primary",
    },
    "&.Mui-error": {
      borderColor: "error.main",
    },
    ".MuiInputLabel-root": {
      transform: "scale(1)",
    },
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
};
