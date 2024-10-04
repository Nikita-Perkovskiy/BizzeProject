import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";
export const styles = {
  optionInputWrapper: {
    width: "100%",
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
  },
  basketIconWrapper: {
    position: "relative",
    width: "50px",
    height: "50px",
    maxWidth: "50px",
    maxHeight: "50px",
    border: "1px solid",
    borderRadius: "4px",
    borderColor: colors.text.secondary,
  },
  basketIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  },
  optionsWrapper: {
    gap: {
      md: "20px",
      xs: "10px",
    },
    flexWrap: "nowrap",
  },
  additionalServicesFormWrapper: {
    height: "100%",
    padding: {
      md: "30px 40px 30px 40px",
      xs: "15px 20px 15px 20px",
    },
    borderRadius: "10px",
    boxShadow: shadows.main,
    overflow: "hidden",
    gap: "20px",
    flexWrap: {
      md: "nowrap",
      xs: "wrap",
    },
  },
};
