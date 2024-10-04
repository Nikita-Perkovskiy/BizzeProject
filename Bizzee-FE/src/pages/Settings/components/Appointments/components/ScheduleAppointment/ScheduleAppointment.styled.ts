import { fontSize } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  drawer: (isLargeScreen: boolean, isXlScreen: boolean) => ({
    zIndex: "1700",
    "& .MuiDrawer-paper": {
      height: {
        xs: "calc(100vh - 50px)",
        md: "100vh",
      },
      width: {
        xs: "100%",
        md: isLargeScreen ? "78%" : "100%",
        lg: isXlScreen ? "58%" : "78%",
      },
      py: "60px",
      px: {
        xs: "10px",
        md: "70px",
      },
      borderTopLeftRadius: {
        xs: "10px",
        md: 0,
      },
      borderTopRightRadius: {
        xs: "10px",
        md: 0,
      },
    },
  }),
  closeBtn: {
    position: "absolute",
    top: "10px",
    left: {
      lg: "70px",
    },
    right: {
      xs: "20px",
      md: "70px",
      lg: 0,
    },
  },
  title: {
    textAlign: "center",
    fontSize: {
      xs: fontSize.l,
      md: fontSize.xl,
      lg: fontSize.xxl,
    },
    textTransform: "uppercase",
    fontWeight: 500,
    lineHeight: {
      lg: "81px",
    },
    letterSpacing: {
      lg: "11px",
    },
    "&:after": {
      content: "''",
      display: {
        xs: "none",
        md: "block",
      },
      width: "100%",
      mt: {
        md: "10px",
      },
      borderBottom: "1px solid black",
    },
  },
  drawerContent: {
    width: "100%",
    pt: {
      xs: "40px",
      lg: "50px",
    },
    px: "0px",
  },
  formsWrapper: {
    borderRadius: "10px",
    padding: {
      xs: "30px 20px",
      md: "30px 40px",
    },
    mb: {
      xs: "30px",
      md: "40px",
    },
    boxShadow: {
      xs: shadows.main,
    },
  },
  schedulingWrapper: {
    mr: {
      lg: "40px",
    },
  },
  clientInfoWrapper: {
    minHeight: {
      lg: "615px",
    },
  },
  titleContainer: {
    width: "100%",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    mb: "30px",
  },
  formTitle: {
    textAlign: "left",
    fontSize: {
      xs: "24px",
    },
    lineHeight: "35px",
    textTransform: "uppercase",
    mb: {
      xs: "30px",
    },
  },
  helpText: {
    textAlign: "left",
    fontSize: {
      xs: "14px",
      md: "16px",
    },
    color: "text.secondary",
    textTransform: "none",
  },
  helpTextBold: {
    fontWeight: 700,
  },
  dateWrapper: {
    position: "relative",
    width: {
      xs: "100%",
    },
    "& .MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "14px",
      transform: "none",
    },
    mt: {
      xs: "16px",
    },
    mb: {
      xs: "4px",
    },
  },
  phoneLabel: {
    marginBottom: "5px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: "text.primary",
  },
  phoneWrapper: {
    display: "flex",
    width: {
      xs: "100%",
    },
    "& .MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "14px",
      transform: "none",
    },
    mb: {
      md: "20px",
    },
  },
  phoneLabelWrapper: {
    mb: {
      md: "0px",
    },
  },
  phoneInput: {
    width: "calc(100% - 111px)",
    ml: "auto",
    "& .MuiInputBase-root.MuiInput-root": {
      mt: "0",
    },
    "& .MuiInput-root": {
      position: "relative",
      borderRadius: "0 4px 4px 0",
      pb: "10px",
    },
    "& .MuiInputBase-root.Mui-error": {
      color: "error.main",
    },
  },
  countrySelect: {
    width: "111px",
    height: "50px",
    "& .MuiSelect-select.MuiSelect-standard#mui-component-select-countryCode": {
      height: "100%",
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: "15px",
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
    border: "1px solid",
    borderColor: "text.secondary",
    borderRight: "none",
    borderRadius: "4px 0 0 4px",
    "&.Mui-focused": {
      border: "2px solid",
      borderColor: "accents.main",
    },
    "&.Mui-error": {
      border: "2px solid",
      borderColor: "error.main",
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
    },
    "& .MuiInputBase-input-MuiOutlinedInput-input": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      color: "text.primary",
    },
  },
  authInput: {
    "& .MuiInputBase-root.MuiInput-root": {
      mt: "25px",
    },
    "& .MuiInputBase-root.Mui-error": {
      color: "error.main",
    },
    width: {
      xs: "100%",
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
    mb: {
      xs: "20px",
    },
  },
  authInputError: {
    "& .MuiInputBase-root.MuiInput-root": {
      mt: "25px",
      border: "2px solid",
      borderColor: "error.main",
      borderRadius: "4px",
      height: "48px",
      color: "error.main",
    },
    width: {
      xs: "100%",
      lg: "300px",
    },
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .MuiFormLabel-root": {
      color: "error.main",
      fontSize: "14px",
    },
    "& .MuiInputLabel-root": {
      transform: "none",
    },
    mb: {
      xs: "20px",
    },
  },
  radioGroup: {
    p: "20px 0 0 20px",
    "& > fieldset > div": {
      ml: "5px",
    },
    "& .MuiFormControlLabel-root": {
      mr: {
        md: "0px",
      },
    },
    "&.MuiFormGroup-root": {
      flexDirection: {
        xs: "column",
        md: "row",
      },
    },
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      md: "row",
    },
    justifyContent: {
      md: "right",
    },
    alignItems: {
      xs: "center",
    },
    pt: {
      xs: "10px",
    },
  },
  generalBtn: {
    height: "50px",
    width: {
      xs: "320px",
      md: "180px",
    },
    border: "1px solid",
    "&:last-child": {
      mb: {
        xs: "20px",
        md: "0px",
      },
    },
  },
  cancelBtn: {
    mr: {
      md: "20px",
    },
  },
  smartSearch: {
    width: {
      xs: "100%",
    },
    mb: {
      xs: "4px",
    },
  },
  smartSearchTime: {
    mt: {
      md: "16px",
      lg: "0px",
    },
  },
  durationSmartSearch: {
    mt: {
      xs: "16px",
    },
    mb: {
      xs: "0px",
    },
  },
  priceInput: {
    width: {
      xs: "160px",
    },
    mr: {
      xs: "16px",
      md: "20px",
    },
  },
  currencyInput: {
    "& .MuiInputBase-root": {
      width: {
        xs: "120px",
      },
      height: {
        xs: "50px",
      },
    },
    "& .MuiFormLabel-root": {
      mb: "5px",
      color: "text.secondary",
    },
    "& .MuiSelect-icon.Mui-disabled": {
      top: "calc(50% - 0.7em)",
    },
  },
  textAreaInput: {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      mt: "2px",
    },
    mt: {
      md: "20px",
    },
    width: "100%",
    "& textarea": {
      height: "60px !important",
    },
  },
};
