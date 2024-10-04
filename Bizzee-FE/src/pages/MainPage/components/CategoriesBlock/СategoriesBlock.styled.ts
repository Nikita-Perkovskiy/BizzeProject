import { fontSize, fonts } from "config/styles/fonts";

export const styles = {
  blockWrapper: (isLargeScreen: boolean) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    p: {
      xs: "100px 20px",
      md: isLargeScreen ? "100px 66px" : "100px 50px",
      lg: "150px 248px",
    },
    width: "100%",
    maxWidth: "1920px",
    gap: {
      xs: "40px",
      lg: "70px",
    },
  }),
  blockTitle: {
    fontFamily: fonts.title,
    fontSize: {
      xs: fontSize.xxl,
      lg: fontSize.xxxl,
    },
    fontWeight: 500,
    lineHeight: {
      xs: "61.2px",
      lg: "72.48px",
    },
    letterSpacing: {
      xs: "8px",
      lg: "3px",
    },
    color: "text.primary",
    width: "100%",
    maxWidth: {
      xs: "350px",
      lg: "540px",
    },
    textAlign: "left",
  },
  categoriesWrapper: {
    width: "100%",
  },
  buttonBlock: {
    display: "flex",
    justifyContent: "center",
  },
  seeMoreBtn: {
    mt: "-10px",
    height: "50px",
    width: "100%",
    maxWidth: "320px",
  },
};
