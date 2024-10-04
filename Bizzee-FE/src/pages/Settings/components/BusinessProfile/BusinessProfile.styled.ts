import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  pageContainer: {
    width: "100%",
    pt: {
      lg: "40px",
    },
  },
  formsContainer: {
    mb: {
      xs: "40px",
      md: "50px",
    },
    display: {
      xs: "flex",
    },
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    justifyContent: "space-between",
    gap: {
      xs: "30px",
      md: "40px",
    },
  },
  formWrapper: {
    width: "100%",
    px: {
      xs: "20px",
      md: "40px",
    },
    py: {
      xs: "30px",
    },
    boxShadow: shadows.main,
    borderRadius: "10px",
  },
  titleContainer: {
    mb: "30px",
  },
  formTitle: {
    textAlign: "left",
    fontSize: {
      xs: "24px",
    },
    textTransform: "uppercase",
  },
  helpText: {
    mt: "10px",
    textAlign: "left",
    fontSize: "14px",
    color: "text.secondary",
  },
  generalInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "10px",
      md: "20px",
    },
  },
  authInput: {
    width: "100%",
    "& .MuiInputBase-root.MuiInput-root": {
      mt: "25px",
    },
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "14px",
    },
    "& .MuiInputLabel-root": {
      transform: "none",
    },
  },
  phoneWrapper: {
    position: "relative",
    width: "100%",
    "& .MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "14px",
      transform: "none",
    },
  },
  countrySelect: {
    width: "112px",
    height: "50px",
    "& .MuiSelect-select.MuiSelect-standard#mui-component-select-countryCode": {
      height: "100%",
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: "16px",
      paddingRight: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "text.secondary",
    },
    "& .MuiSelect-icon": {
      right: "13px",
      stroke: colors.text.secondary,
    },
  },
  countrySelectWrapper: {
    position: "absolute",
    top: "25px",
    left: "0px",
  },
  phoneInput: {
    width: "100%",
    "& .MuiInput-root": {
      position: "relative",
      paddingLeft: "125px",
      mt: "25px",
      "&::before": {
        content: "''",
        height: "49px",
        borderLeft: "1px solid",
        borderColor: "text.secondary",
        position: "absolute",
        top: 0,
        left: "110px",
      },
      "&.Mui-focused": {
        "&::before": {
          height: "48px",
          borderLeft: "2px solid",
          borderColor: "accents.main",
        },
      },
      "&.Mui-error": {
        "&::before": {
          height: "48px",
          borderLeft: "2px solid",
          borderColor: "error.main",
        },
      },
      "&.Mui-disabled": {
        "&::before": {
          borderColor: "gray.disabled",
          cursor: "not-allowed",
        },
      },
    },
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: {
      md: "right",
    },
  },
  submitBtn: {
    width: {
      xs: "100%",
      md: "130px",
    },
    height: "50px",
  },
  locationWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  locationInputsWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: "20px",
  },
};
