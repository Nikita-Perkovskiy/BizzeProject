import { colors } from "config/styles/themeColors";

export const styles = {
  formWrapper: {
    width: "100%",
    margin: "0 auto",
    padding: {
      xs: "10px 20px 0",
      md: "30px 30px 115px",
      lg: "40px 140px 60px",
    },
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "&>form": {
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexGrow: 1,
      width: "100%",
    },
  },
  inputsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "10px",
      md: "20px",
      lg: "10px",
    },
  },
  inputsTabletWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
      lg: "column",
    },

    gap: {
      xs: "10px",
      md: "25px",
      lg: "10px",
    },
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: {
      xs: "50px",
      md: "125px",
      lg: 0,
    },
  },
  submitBtn: {
    width: {
      xs: "100%",
    },
    height: "50px",
  },
  authInput: {
    width: "100%",
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  linkText: {
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  linkBtn: {
    border: "none",
    minWidth: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:focus": {
      outline: "2px solid",
      outlineColor: "text.primary",
    },
  },
  phoneWrapper: {
    position: "relative",
    width: "100%",
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
    top: "21px",
    left: "0px",
  },
  phoneInput: {
    width: "100%",
    "& .MuiInput-root": {
      position: "relative",
      paddingLeft: "125px",
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
};
