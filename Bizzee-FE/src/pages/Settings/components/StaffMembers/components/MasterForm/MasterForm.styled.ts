import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";
import { fontSize } from "config/styles/fonts";

export const styles = {
  formWrapper: {
    maxWidth: "1120px",
    width: "100%",
    margin: "auto",
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
  photoBlockWrapper: {
    position: {
      xs: "relative",
      lg: "absolute",
    },
    width: {
      lg: "100%",
    },
    minHeight: {
      lg: "245px",
    },
    mb: {
      xs: "30px",
      md: "40px",
      lg: "0px",
    },

    borderRadius: "10px",
    boxShadow: shadows.main,
  },
  generalInfoWrapper: {
    height: "100%",
    pt: { lg: "300px" },
  },
  generalInfoBox: {
    height: "100%",
  },
  fieldBox: {
    mt: "15px",
    gap: "12px",
  },
  fieldItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    minWidth: "150px",
  },
  fieldWrapper: {
    width: "100%",
    maxWidth: "320px",
  },
  contentItem: {
    mt: "40px",
    height: "100%",
    minHeight: { xs: "100%", lg: "380px" },
    borderRadius: "10px",
    boxShadow: shadows.main,
    padding: {
      xs: "20px 10px",
      ["@media (min-width: 420px)"]: {
        padding: "30px 40px",
      },
      lg: "30px 40px",
    },
  },
  descriptionItem: {
    height: "100%",
    minHeight: { xs: "auto", lg: "380px" },
    borderRadius: "10px",
    boxShadow: shadows.main,
    padding: {
      xs: "20px 10px",
      ["@media (min-width: 420px)"]: {
        padding: "30px 40px",
      },
      lg: "30px 40px",
    },
  },
  masterInpup: {
    width: "100%",
    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: fontSize.m,
      lineHeight: "23px",
      color: "text.primary",
    },
    "& ::placeholder": {
      fontWeight: "400",
      fontSize: fontSize.m,
      lineHeight: "28px",
      zIndex: 1,
      opacity: 1,
      filter: "none",
      color: `${colors.text.secondary} !important`,
    },
    "&.Mui-error": {
      borderColor: "error.main",
    },
    ".MuiInputLabel-root": {
      transform: "scale(1)",
      "&::placeholder": {
        color: colors.text.secondary,
      },
    },
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: fontSize.m,
      lineHeight: "24px",
    },
  },
  phoneWrapper: {
    position: "relative",
    width: "320px",
  },
  phoneInput: {
    width: "100%",
    "& ::placeholder": {
      fontWeight: "400",
      fontSize: fontSize.m,
      lineHeight: "28px",
      zIndex: 1,
      opacity: 1,
      filter: "none",
      color: `${colors.text.secondary} !important`,
    },
    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: fontSize.m,
      lineHeight: "23px",
    },
    ".MuiInputLabel-root": {
      transform: "scale(1)",
    },
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
    left: "0",
  },
  inputWrapper: {
    maxWidth: "320px",
    width: "100%",
    "& ::placeholder": {
      fontWeight: "400",
      fontSize: fontSize.m,
      lineHeight: "28px",
      zIndex: 1,
      opacity: 1,
      filter: "none",
      color: `${colors.text.secondary} !important`,
    },
    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: fontSize.m,
      lineHeight: "23px",
    },
    ".MuiInputLabel-root": {
      transform: "scale(1)",
    },
  },
  inputWrapperStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputStyles: {
    width: "100%",
    maxWidth: "320px",
  },
  masterFormButtonWrapper: {
    mt: "40px",
  },
  masterFormButton: {
    padding: "17px 44px 17px 44px",
    backgroundColor: colors.text.primary,
    color: colors.background.default,
    cursor: "poitnter",
    width: { xs: "100%", sm: "150px" },
  },
  userStatus: {
    padding: "5px 10px",
    borderRadius: "10px",
    backgroundColor: colors.accents.hover,
    fontWeight: "700",
    fontSize: fontSize.s,
    lineHeight: "14px",
    color: colors.text.tags,
  },
  descriptionBox: {
    mt: "50px",
    gap: "12px",
  },
  categoriesBlock: {
    minWidth: "335px",
  },
  categoriesItem: {
    padding: "0px 5px 0px 10px",
    height: "40px",
    margin: "5px",
    borderRadius: "10px",
    backgroundColor: colors.background.default,
    boxShadow: shadows.main,
    display: "flex",
    alignItems: "center",
    "& .MuiChip-label": {
      margin: "0px 5px 0px 0px",
      fontWeight: "400",
      fontSize: fontSize.s,
      lineHeight: "14px",
      color: colors.text.primary,
    },
  },
  categoriesItemWrapper: {
    mt: "10px",
    gap: "10px",
  },
  titelWrapper: {
    ml: "10px",
  },
};
