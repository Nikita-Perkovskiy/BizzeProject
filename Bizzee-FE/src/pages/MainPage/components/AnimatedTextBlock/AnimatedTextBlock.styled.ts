import { fontSize, fonts } from "config/styles/fonts";

export const styles = {
  blockFon: {
    width: "100%",
    height: "fit-content",
    backgroundColor: "gray.timeSlot",
  },
  blockWrapper: (isLargeScreen: boolean) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: "100%",
    p: {
      xs: "150px 20px",
      md: isLargeScreen ? "184px 66px 171px 66px" : "100px 50px 120px 50px",
      lg: "237px 248px 209px 248px",
    },
    maxWidth: "1920px",
    gap: {
      xs: "40px",
      md: "30px",
      lg: "70px",
    },
  }),
  textBlock: {
    fontFamily: fonts.title,
    fontSize: {
      xs: fontSize.xxl,
      md: "45px",
      lg: "70px",
    },
    py: {
      xs: "0px",
      md: "17px",
      lg: "0px",
    },
    fontWeight: 500,
    lineHeight: {
      xs: "47px",
      md: "57.5px",
      lg: "89.5px",
    },
    letterSpacing: {
      xs: "5px",
      lg: "8px",
    },
    display: "inline-block",
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  textLetter: (isLargeScreen: boolean, isDesktopScreen: boolean) => ({
    display: "inline-block",
    marginRight: isDesktopScreen ? "28px" : isLargeScreen ? "20px" : "15px",
  }),
  buttonsWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  buttonsBlock: {
    width: {
      xs: "100%",
      md: "510px",
      lg: "890px",
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    gap: {
      xs: "10px",
      md: "20px",
      lg: "30px",
    },
  },
  button: {
    width: {
      xs: "320px",
      md: "100%",
      lg: "300px",
    },
    maxWidth: {
      md: "305px",
    },
    height: {
      xs: "50px",
      lg: "70px",
    },
    borderRadius: {
      xs: "6px",
      lg: "10px",
    },
    color: "#2D2D2D",
  },
  signUpBtn: {
    color: "#F8F8F8",
  },
};
