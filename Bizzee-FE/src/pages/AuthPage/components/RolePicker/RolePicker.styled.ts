import { shadows } from "config/styles/shadows";
import { fonts } from "config/styles/fonts";

export const styles = {
  signUpBody: {
    m: {
      md: "0 25px",
      lg: "0",
    },
    p: {
      xs: "0 20px",
      md: "0",
    },
    pb: {
      md: "12%",
      lg: "0",
    },
    borderRadius: {
      md: "15px",
      lg: "0",
    },
    border: {
      md: "1px solid",
      lg: "none",
    },
    borderColor: {
      md: "accents.main",
    },
    boxShadow: {
      md: shadows.main,
      lg: "none",
    },
  },
  signUpSection: {
    p: {
      md: "15px 0",
      lg: "50px 0 8% 0",
    },
    borderRadius: {
      md: "15px 15px 0 0",
      lg: "0",
    },
    bgcolor: {
      xs: "background.default",
      md: "accents.main",
    },
  },
  signUpSectionText: {
    fontFamily: fonts.title,
    fontSize: {
      xs: "35px",
      md: "44px",
      lg: "65px",
    },
    fontWeight: 400,
    lineHeight: {
      xs: "63px",
      md: "80px",
      lg: "117px",
    },
    letterSpacing: {
      xs: "6px",
      md: "11px",
    },
    textAlign: "center",
  },
  choiceSection: {
    position: "relative",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "center",
    gap: {
      xs: "10px",
      md: "20px",
      lg: "30px",
    },
    mt: {
      md: "10%",
      lg: "0",
    },
  },
  signUpCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: {
      sx: "static",
      lg: "relative",
    },
    bottom: "130px",
    p: {
      xs: "30px 15px",
      lg: "50px 35px 60px",
    },
    border: "1px solid",
    borderColor: "accents.main",
    borderRadius: "10px",
    bgcolor: "background.default",
    boxShadow: shadows.main,
  },
  signUpButton: {
    width: {
      xs: "290px",
      lg: "340px",
    },
    height: {
      xs: "50px",
      lg: "70px",
    },
    mt: {
      lg: "15%",
    },
    borderRadius: "6px",
    fontWeight: "500",
  },
  signUpImage: {
    width: {
      xs: "130px",
      lg: "320px",
    },
    m: "0 auto",
  },
};
