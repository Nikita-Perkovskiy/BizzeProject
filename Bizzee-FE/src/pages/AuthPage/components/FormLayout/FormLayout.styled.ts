import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";

export const styles = {
  formLayoutContainer: {
    maxWidth: "1260px",
    width: "100%",
    display: "flex",
    flexDirection: {
      md: "column",
      lg: "row",
    },
    justifyContent: "center",
    alignItems: "stretch",
    m: {
      md: "30px auto",
    },
    p: {
      md: "0 25px",
    },
  },
  banner: {
    width: "37%",
  },
  formContainer: {
    width: {
      xs: "100%",
      lg: "63%",
    },
    paddingBottom: {
      lg: "40px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: {
      md: "1px solid",
    },
    borderColor: {
      md: "accents.main",
    },
    borderRadius: {
      md: "15px",
      lg: "0 15px 15px 0",
    },
    boxShadow: {
      md: shadows.main,
      lg: "none",
    },
  },
  formTitleContainer: {
    width: "100%",
    textAlign: "center",
    mt: {
      lg: "40px",
    },
    bgcolor: {
      md: "accents.main",
      lg: "background.default",
    },
    borderRadius: {
      md: "15px 15px 0 0",
      lg: "0",
    },
    p: {
      md: "5px 0",
      lg: "0",
    },
  },
  formTitle: {
    fontFamily: fonts.title,
    fontSize: "45px",
    lineHeight: "81px",
    letterSpacing: {
      md: "11px",
      lg: "4px",
    },
    textTransform: "uppercase",
  },
  formTitleMobile: {
    position: "relative",
    bottom: "70px",
    fontFamily: fonts.text,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  formTitleMobileInvisible: {
    display: "none",
  },
  formBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    width: {
      xs: "100%",
      lg: "600px",
    },
    boxShadow: {
      lg: shadows.main,
    },
    borderRadius: {
      lg: "15px",
    },
  },
};
