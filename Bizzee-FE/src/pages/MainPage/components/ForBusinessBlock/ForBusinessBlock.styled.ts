import { fonts, fontSize } from "config/styles/fonts";

export const styles = {
  blockFon: {
    width: "100%",
    backgroundColor: "text.primary",
  },
  blockWrapper: (isLargeScreen: boolean) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    p: {
      xs: "100px 20px",
      md: isLargeScreen ? "100px 70px" : "100px 0 100px 50px",
      lg: "130px 248px",
    },
    width: "100%",
    maxWidth: "1920px",
  }),
  title: (isLargeScreen: boolean) => ({
    fontFamily: fonts.title,
    fontWeight: 500,
    fontSize: {
      xs: fontSize.xxl,
      md: isLargeScreen ? "80px" : fontSize.xxxl,
      lg: "130px",
    },
    lineHeight: {
      xs: "45px",
      md: isLargeScreen ? "89px" : "71px",
      lg: "221px",
    },
    letterSpacing: {
      xs: "4px",
      lg: "8px",
    },
    textTransform: "uppercase",
    color: "background.default",
    mb: {
      xs: "30px",
      lg: "0px",
    },
  }),
  mainContentWrap: (isLargeScreen: boolean) => ({
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: {
      xs: "50px",
      md: isLargeScreen ? "50px" : "40px",
      lg: "100px",
    },
    mb: "100px",
  }),
  text: {
    fontFamily: fonts.text,
    fontSize: {
      xs: fontSize.l,
      lg: fontSize.xl,
    },
    lineHeight: {
      xs: "23px",
      lg: "30px",
    },
    color: "text.subContent",
    mb: {
      xs: "30px",
      lg: "40px",
    },
  },
  signUpButton: {
    transition: "all 0.5s ease",
    width: {
      xs: "100%",
      md: "256px",
      lg: "350px",
    },
    height: {
      xs: "50px",
      lg: "70px",
    },
    fontSize: fontSize.l,
    fontWeight: "700",
    display: "flex",
    gap: "10px",
    mb: {
      xs: "50px",
      lg: "100px",
    },
    color: "background.default",
    "& > div > div:first-of-type": {
      mr: "10px",
    },
    "& > div > div > svg": {
      opacity: "1 !important",
    },
  },
  signUpButtonHide: (isMobileScreen: boolean) => ({
    display: isMobileScreen ? "none" : "flex",
  }),
  iconRight: {
    marginTop: "5px",
  },
  cardWrap: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: {
      xs: "10px",
      lg: "20px",
    },
    p: {
      xs: "28px",
      md: "40px 46px",
      lg: "60px 50px",
    },
    borderRadius: "10px",
    backgroundColor: "gray.hoverItem",
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: {
      xs: fontSize.xl,
      md: fontSize.xxl,
      lg: "40px",
    },
    lineHeight: {
      xs: "38px",
      md: "48px",
      lg: "54px",
    },
    color: "background.default",
    maxWidth: {
      lg: "267px",
    },
  },
  cardList: {
    "&.MuiList-root": {
      p: "0px",
    },
    "& .MuiListItem-root": {
      p: "0px",
      mb: "8px",
      color: "text.subContent",
      "& .MuiListItemIcon-root": {
        minWidth: "auto",
        width: "18px",
      },
      "& .MuiListItemText-root": {
        "& .MuiTypography-root": {
          fontSize: {
            xs: fontSize.m,
            md: fontSize.l,
            lg: fontSize.xl,
          },
          lineHeight: {
            xs: "24px",
            md: "22px",
            lg: "30px",
          },
        },
        m: "0px",
      },
    },
    "& .MuiListItem-root:last-of-type": {
      mb: "0px",
    },
  },
  imageWrap: (isLargeScreen: boolean) => ({
    display: "flex",
    justifyContent: "center",
    "& .MuiCardMedia-img": {
      width: {
        xs: "320px",
        md: isLargeScreen ? "430px" : "250px",
        lg: "550px",
      },
    },
  }),
  animationBlockWrap: (isLargeScreen: boolean) => ({
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row-reverse",
    },
    gap: {
      xs: "45px",
      md: isLargeScreen ? "45px" : "35px",
    },
    pr: {
      xs: "0px",
      md: isLargeScreen ? "0px" : "50px",
    },
  }),
  animationImgBlockWrap: (isLargeScreen: boolean) => ({
    "& .swiper .swiper-wrapper .swiper-slide": {
      display: "flex",
      justifyContent: {
        xs: "center",
        md: "flex-end",
      },
    },
    width: {
      xs: "100%",
      md: isLargeScreen ? "40%" : "37%",
    },
  }),
  forBusinessImg: (isLargeScreen: boolean) => ({
    width: {
      xs: "260px",
      md: isLargeScreen ? "343px" : "247px",
      lg: "455px",
    },
  }),
  animationTextBlockWrap: (isLargeScreen: boolean) => ({
    width: {
      xs: "100%",
      md: "60%",
    },
    mt: {
      xs: "0",
      md: isLargeScreen ? "10%" : "4%",
    },
    "& .swiper": {
      pl: {
        xs: "25px",
        lg: "27px",
      },
      mr: "0px",
      ml: "0px",
      width: {
        xs: "90%",
        md: "100%",
        lg: "600px",
      },
      mb: {
        xs: "0px",
        md: "60px",
        lg: "90px",
      },
    },
    "& .swiper .swiper-wrapper": {
      flexDirection: {
        md: "column",
      },
    },
    "& .swiper .swiper-wrapper .swiper-slide": {
      padding: {
        xs: "22px 10px 22px 0px",
        md: "17px 24px 17px 0px",
        lg: "22px 30px 22px 0px",
      },
      width: "100% !important",
      "& .MuiListItemText-root": {
        width: {
          md: isLargeScreen ? "80%" : "100%",
        },
      },
      "& .MuiTypography-root": {
        color: "background.default",
        opacity: 0.1,
        fontWeight: 500,
        fontSize: {
          xs: fontSize.l,
          md: fontSize.xl,
        },
        lineHeight: {
          xs: "23px",
          md: "32px",
        },
        textTransform: "capitalize",
      },
    },
    "& .swiper .swiper-wrapper .swiper-slide.swiper-slide-active": {
      backgroundColor: "gray.hoverItem",
      borderRadius: {
        xs: "8px",
        lg: "10px",
      },
      padding: {
        xs: "22px 10px 22px 24px",
        md: "17px 24px 17px 40px",
        lg: "22px 30px 22px 80px",
      },
      "& .MuiTypography-root": {
        color: "background.default",
        opacity: 1.0,
        fontWeight: 500,
        fontSize: {
          xs: fontSize.l,
          md: fontSize.xl,
        },
        lineHeight: {
          xs: "23px",
          md: "32px",
        },
      },
    },
    "& .swiper .swiper-wrapper .swiper-slide.swiper-slide-active::before": {
      content: "''",
      width: {
        xs: "40px",
        lg: "50px",
      },
      height: {
        xs: "40px",
        lg: "50px",
      },
      borderRadius: "50%",
      backgroundColor: "accents.main",
      position: "absolute",
      top: "50%",
      marginTop: {
        xs: "-20px",
        lg: "-25px",
      },
      left: {
        xs: "-22px",
        lg: "-27px",
      },
    },
    "& .swiper .swiper-wrapper .swiper-slide.swiper-slide-active::after": {
      content: "''",
      border: "solid black",
      borderWidth: "0 2px 2px 0",
      display: "inline-block",
      padding: "2px",
      position: "absolute",
      width: "2px",
      height: "2px",
      top: "50%",
      left: "-3px",
      transform: "translate(-50%, -50%) rotate(-45deg)",
    },
    "& .swiper .swiper-wrapper .swiper-slide:not(:last-of-type)": {
      mb: {
        md: "12px",
        lg: "15px",
      },
    },
  }),
};
