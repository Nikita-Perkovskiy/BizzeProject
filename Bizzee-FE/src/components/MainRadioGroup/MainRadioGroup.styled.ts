import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";
import { shadows } from "config/styles/shadows";

export const styles = {
  customIcon: {
    width: "20px",
    height: "20px",
    border: `2px solid #000000`,
    borderRadius: "50%",
  },
  customCheckIcon: {
    position: "relative",
    width: "20px",
    height: "20px",
    border: `2px solid #000000`,
    borderRadius: "50%",
    padding: "3px",
  },
  checkDrop: {
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "accents.main",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  errorText: {
    marginTop: "8px",
    fontFamily: fonts.text,
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: 0,
    lineHeight: "normal",
    color: "error.main",
  },
  label: {
    "&.MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "16px",
      fontFamily: fonts.text,
      fontWeight: 400,
      lineHeight: "20px",
      mb: "10px",
    },
  },
  disabledRadio: {
    "& > span.MuiBox-root": {
      border: "2px solid",
      borderColor: "text.secondary",
    },
  },
  inputWrap: {
    "& > label > span.MuiButtonBase-root.MuiRadio-root": {
      padding: "5px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: `${colors.accents.hover} !important`,
      },
    },
  },
  title: {
    "& span.MuiFormControlLabel-label": {
      ml: "5px",
    },
  },
  tooltip: {
    backgroundColor: "background.default",
    color: colors.text.primary,
    boxShadow: shadows.main,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "15px",
    textAlign: "center",
    maxWidth: 200,
    padding: "10px 15px",
    borderRadius: "10px",
    "& .MuiTooltip-arrow": {
      color: "background.default",
    },
  },
  tooltipIcon: {
    color: "text.primary",
    top: "1px",
    padding: "5px",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  tooltipIconDisabled: {
    color: "text.secondary",
    cursor: "default",
  },
};
