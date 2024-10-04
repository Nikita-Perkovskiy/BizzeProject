import { fontSize, fonts } from "config/styles/fonts";

export const styles = {
  blockFon: {
    width: "100%",
    backgroundColor: "gray.timeSlot",
  },
  blockWrapper: (isLargeScreen: boolean) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    p: {
      xs: "100px 20px",
      md: isLargeScreen ? "100px 70px" : "100px 50px",
      lg: "130px 248px",
    },
    width: "100%",
    maxWidth: "1920px",
  }),
  titleWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    alignItems: {
      xs: "flex-start",
      md: "flex-end",
    },
    marginBottom: {
      xs: "32px",
      md: "36px",
      lg: "70px",
    },
  },
  title: {
    fontFamily: fonts.title,
    fontSize: {
      xs: fontSize.xxl,
      lg: fontSize.xxxl,
    },
    fontWeight: {
      xs: 500,
      lg: 700,
    },
    lineHeight: {
      xs: "54px",
      lg: "110px",
    },
    letterSpacing: {
      xs: "6px",
      md: "8px",
    },
    color: "text.primary",
    width: "100%",
    maxWidth: {
      xs: "350px",
      lg: "540px",
    },
    textAlign: "left",
    textTransform: "uppercase",
    marginBottom: {
      xs: "40px",
      md: "0px",
    },
  },
  sortBtn: {
    width: "160px",
    height: "50px",
    fontWeight: 300,
    borderRadius: "4px",
    border: "1px solid",
  },
  cardsWrapper: {
    alignItems: "stretch",
    mb: {
      xs: "32px",
      md: "36px",
      lg: "70px",
    },
  },
  seeMoreBtn: (isDisabledBtn: boolean) => ({
    display: isDisabledBtn ? "none" : "block",
    alignSelf: "center",
    width: {
      xs: "100%",
      md: "180px",
      lg: "300px",
    },
    height: {
      xs: "50px",
      lg: "70px",
    },
    borderRadius: {
      xs: "6px",
      lg: "10px",
    },
  }),
};
