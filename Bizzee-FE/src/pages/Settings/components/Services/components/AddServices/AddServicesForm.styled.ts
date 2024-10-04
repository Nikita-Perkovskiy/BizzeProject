import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  formWrapper: {
    margin: "auto",
    padding: {
      md: "0px 10px 20px 10px",
      xs: "10px 5px",
    },
    maxWidth: "800px",
    height: "100%",
    width: "100%",
    marginBottom: "150px",
    zIndex: 1700,
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    justifyContent: {
      md: "space-between",
      xs: "center",
    },
    alignItems: "center",
    gap: "5px",
    flexWrap: {
      md: "wrap",
      sm: "nowrap",
      xs: "wrap",
    },
  },
  titleItem: {
    width: "100%",
    maxWidth: "320px",
  },

  contentWrapper: {
    gap: "30px",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  contentBlock: {
    height: "100%",
    padding: {
      md: "30px 40px 30px 40px",
      xs: "10px 5px 10px 5px",
    },
    borderRadius: "10px",
    boxShadow: shadows.main,
  },
  contentBlockHeader: {
    width: "100%",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "34px",
    color: colors.text.primary,
    textTransform: "uppercase",
    textAlign: {
      md: "left",
      xs: "center",
    },
  },
  contentBlockTitle: {
    width: "100%",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: {
      md: "left",
      xs: "center",
    },
    color: colors.text.secondary,
  },
  inputWrapper: {
    width: "100%",
    maxWidth: "320px",
    zIndex: 1700,
    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      color: colors.text.primary,
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
  serviceWrapper: {
    paddingRight: {
      md: "15px",
      xs: "0px",
    },
  },
  priceWrapper: {
    maxWidth: "380px",
    paddingLeft: {
      sm: "15px",
      xs: "0px",
    },
    paddingTop: {
      sm: "0px",
      xs: "30px",
    },
    height: {
      md: "100%",
      xs: "auto",
    },
  },
  additionalServicesWrapper: {
    marginTop: "10px",
  },
  createButtonTopWrapper: {
    display: {
      md: "flex",
      xs: "none",
    },
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  createButtonFooterWrapper: {
    marginTop: "20px",
    display: {
      md: "none",
      xs: "flex",
    },
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonBlockWrapper: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
    widt: "100%",
    flexDirection: {
      sm: "row",
      xs: "column-reverse",
    },
    justifyContent: {
      sm: "flex-end",
      xs: "center",
    },
    alignItems: {
      sm: "flex-end",
      xs: "center",
    },
    flexWrap: {
      sm: "nowrap",
      xs: "wrap",
    },
  },
  buttonWrapper: {
    width: {
      sm: "auto",
      xs: "100%",
    },
  },
  cancelButton: {
    padding: "16px 44px 16px 44px",
    borderRadius: "6px",
    backgroundColor: colors.background.default,
    color: colors.text.primary,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "16px",
    cursor: "poitnter",
    width: { xs: "100%", sm: "180px" },
    border: "1px solid",
    borderColor: colors.text.secondary,
  },
  addButton: {
    padding: "16px 44px 16px 44px",
    borderRadius: "6px",
    cursor: "pointer",
    width: { xs: "100%", sm: "180px" },
  },
  serviceHeader: {
    fontWeight: 400,
    fontSize: "44px",
    lineHeight: "46px",
    color: colors.text.primary,
    textAlign: "center",
    textTransform: "uppercase",
  },
  serviceHeaderWrapper: {
    borderBottom: {
      md: "1px solid",
      xs: "none",
    },
    borderColor: colors.text.primary,
  },
  priceBlockWrapper: {
    display: "flex",
    flexWrap: {
      sm: "nowrap",
      xs: "wrap",
    },
  },
};
