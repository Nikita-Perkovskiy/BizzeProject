import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  pageContainer: {
    width: "100%",
    pt: {
      xs: "30px",
      md: "40px",
    },
    px: {
      xs: "10px",
      md: "0px",
    },
    position: {
      lg: "relative",
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
  photoBlockWrapper: {
    position: {
      xs: "relative",
      lg: "absolute",
    },
    width: {
      lg: "100%",
    },
    mb: {
      xs: "30px",
      md: "40px",
      lg: "0px",
    },
  },
  titleContainerGeneral: {
    mt: {
      lg: "245px",
    },
    width: "100%",
  },
  titleContainer: {
    width: "100%",
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
    mt: "10px",
    textAlign: "left",
    fontSize: {
      xs: "14px",
      md: "16px",
    },
    color: "text.secondary",
    textTransform: "none",
  },
  authInput: {
    mt: "40px",
    "& .MuiInputBase-root.MuiInput-root": {
      mt: "25px",
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
      color: "text.primary",
      fontSize: "14px",
    },
    "& .MuiInputLabel-root": {
      transform: "none",
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
  },
  textAreaInput: {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      mt: "2px",
    },
    mt: {
      xs: "10px",
      md: "20px",
    },
    width: "100%",
  },
  autocompleteInput: {
    "& .MuiFormLabel-root.MuiInputLabel-root": {
      mb: "8px",
    },
    width: "100%",
  },
  phoneWrapper: {
    position: "relative",
    width: {
      xs: "100%",
      lg: "300px",
    },
    "& .MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "14px",
      transform: "none",
    },
    mb: {
      xs: "10px",
      md: "20px",
    },
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
  countrySelect: {
    width: "112px",
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
  },
  countrySelectWrapper: {
    position: "absolute",
    top: "25px",
    left: "0px",
  },
  notificationWrapper: {
    p: "0 16px",
  },
  notificationText: {
    color: "error.main",
    fontSize: "12px",
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
    width: {
      md: "100%",
      lg: "580px",
    },
  },
  zipInput: {
    width: {
      xs: "100%",
    },
    "& .MuiInputBase-root.MuiInput-root": {
      mt: "25px",
    },
    "& .MuiFormLabel-root": {
      color: "text.primary",
      fontSize: "14px",
    },
    "& .MuiInputLabel-root": {
      transform: "none",
    },
  },
  locationInputWrapper: {
    width: {
      md: "100%",
      lg: "280px",
    },
  },
  gridItem: {
    marginTop: {
      lg: "32px",
    },
  },
  autocompleteLabel: {
    "&.MuiFormLabel-root.MuiInputLabel-root": {
      mb: "4px",
    },
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    color: colors.text.secondary,
  },
  selectWrapper: {
    width: {
      xs: "100%",
      lg: "300px",
    },
  },
  select: {
    display: "flex",
    alignItems: "center",
    width: {
      xs: "100%",
      lg: "300px",
    },
    mt: "5px",
    p: "9px 15px",
    border: `1px solid ${colors.text.secondary}`,
    borderRadius: "4px",
    "& .MuiSelect-icon": {
      stroke: colors.text.secondary,
      mr: "15px",
      mb: "3px",
    },
  },
  socialListWrap: {
    "&.MuiGrid-item": {
      pl: {
        lg: "20px",
      },
      pt: {
        xs: "30px",
        lg: "50px",
      },
    },
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: {
      md: "right",
    },
    mt: {
      xs: "10px",
    },
  },
  submitBtn: {
    width: {
      xs: "100%",
      md: "130px",
    },
    height: "50px",
  },
  socialList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  socialDivider: {
    "&.MuiDivider-root": {
      borderWidth: "0.5px",
      borderColor: "text.secondary",
      mt: "10px",
    },
  },
};
