import { fonts } from "config/styles/fonts";

export const styles = {
  bannerTitleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "20px",
  },
  bannerTitleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
  },
  bannerSubtitle: {
    mb: {
      md: "9px",
    },
    fontFamily: fonts.title,
    fontSize: {
      md: "18px",
      lg: "27px",
    },
    lineHeight: {
      md: "25px",
      lg: "28px",
    },
    letterSpacing: {
      md: "6px",
      lg: "11px",
    },
    textTransform: "uppercase",
  },
  bannerTitle: {
    width: "569px",
    fontFamily: fonts.title,
    fontSize: {
      md: "45px",
      lg: "65px",
    },
    lineHeight: {
      md: "43px",
      lg: "70px",
    },
    letterSpacing: "11px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  bannerIconSprayer: {
    "& svg": {
      width: "120px",
    },
  },
  bannerIconScissors: {
    "& svg": {
      width: "100px",
    },
  },
};
