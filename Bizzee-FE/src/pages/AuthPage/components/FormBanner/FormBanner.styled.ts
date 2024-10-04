import { fonts } from "config/styles/fonts";

export const styles = {
  bannerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    bgcolor: "accents.main",
    border: "1px solid",
    borderColor: "accents.main",
    borderRadius: "15px 0 0 15px",
  },
  bannerTitles: {
    position: "relative",
    bottom: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    m: "0 25px",
  },
  bannerSubtitle: {
    fontFamily: fonts.title,
    fontSize: "27px",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "11px",
    textTransform: "uppercase",
    mb: "25px",
  },
  bannerTitle: {
    fontFamily: fonts.title,
    fontSize: "65px",
    fontWeight: 400,
    lineHeight: "70px",
    letterSpacing: "11px",
    textTransform: "uppercase",
    mb: "15%",
  },
  bannerIconSprayer: {
    alignSelf: "end",
    "& svg": {
      position: "relative",
      bottom: "80px",
      right: "40px",
    },
  },
  bannerIconScissors: {
    "& svg": {
      position: "relative",
      bottom: "40px",
      right: "70px",
    },
  },
};
