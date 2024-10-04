import { fonts } from "config/styles/fonts";

export const styles = {
  successContainer: {
    height: "100%",
    textAlign: "center",
    boxShadow: {
      xs: "none",
      md: "none",
    },
    borderRadius: {
      xs: "12px",
      md: "0",
    },
  },
  successIcon: {
    marginBottom: "20px",
    marginTop: {
      md: "30px",
      lg: "100px",
    },
  },
  successTitle: {
    fontFamily: {
      xs: fonts.text,
      lg: fonts.title,
    },
    fontWeight: 700,
    fontSize: {
      xs: "24px",
      lg: "45px",
    },
    lineHeight: {
      xs: "35px",
      lg: "81px",
    },
    letterSpacing: {
      lg: "4px",
    },
    textTransform: {
      lg: "uppercase",
    },
  },
  successContent: {
    fontFamily: fonts.text,
    mt: "10px",
    mb: {
      xs: "137px",
      md: "32px",
      lg: "60px",
    },
    fontSize: "16px",
    lineHeight: "23px",
  },
  successButton: {
    width: "320px",
    height: {
      xs: "50px",
      lg: "60px",
    },
    fontSize: 16,
    fontWeight: 500,
    borderRadius: "6px",
    lineHeight: "16px",
    textTransform: "none",
    mb: {
      md: "60px",
    },
  },
};
