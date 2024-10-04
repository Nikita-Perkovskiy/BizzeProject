import { fonts } from "config/styles/fonts";

export const styles = {
  contentWrapper: {
    paddingTop: {
      xs: "190px",
      md: "130px",
      lg: "280px",
    },
  },
  titleWrapper: {
    marginBottom: {
      xs: "25px",
      md: "15px",
      lg: "50px",
    },
    paddingLeft: {
      md: "calc(50% - 80px)",
      lg: "calc(50% - 130px)",
    },
  },
  subtitle: {
    fontFamily: fonts.title,
    fontSize: {
      md: "18px",
      lg: "27px",
    },
    letterSpacing: {
      xs: "2px",
      md: "5px",
      lg: "11px",
    },
    lineHeight: {
      md: 1.11,
      lg: 1.03,
    },
    marginBottom: {
      xs: "12px",
      lg: "10px",
    },
  },
  heroTitle: {
    width: {
      xs: "150px",
      md: "385px",
      lg: "100%",
    },
    lineHeight: {
      lg: 1,
    },
    letterSpacing: {
      lg: "10px",
    },
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row-reverse",
    },
    justifyContent: {
      lg: "flex-end",
    },
    alignItems: {
      lg: "center",
    },
    gap: {
      lg: "30px",
    },
    paddingLeft: {
      lg: "calc(50% - 130px)",
    },
  },
  mainTextWrapper: {
    marginBottom: {
      xs: "15px",
      md: "30px",
      lg: 0,
    },
    paddingLeft: {
      md: "calc(50% - 80px)",
      lg: 0,
    },
  },
  mainText: {
    fontSize: {
      md: "18px",
    },
    lineHeight: {
      md: 1.25,
    },
  },
  signUpButton: {
    width: {
      xs: "55%",
      md: "20%",
      lg: "25%",
    },
    minWidth: {
      xs: "318px",
      md: "300px",
      lg: "240px",
    },
    height: {
      xs: "50px",
      lg: "60px",
    },
    margin: {
      xs: "0 auto",
      lg: "0",
    },
    borderRadius: {
      lg: "10px",
    },
  },
  signUpButtonWrapper: {
    textAlign: {
      xs: "center",
      lg: "start",
    },
  },
};
