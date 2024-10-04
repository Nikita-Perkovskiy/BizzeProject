import { fontSize, fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

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
      md: "48px",
      lg: "70px",
    },
    cursor: "default",
  }),
  gridWrapper: {},
  blockTitle: {
    fontFamily: fonts.title,
    fontSize: {
      xs: "35px",
      md: fontSize.xxl,
      lg: fontSize.xxxl,
    },
    fontWeight: 500,
    lineHeight: {
      xs: "39px",
      md: "61.2px",
      lg: "72.48px",
    },
    letterSpacing: {
      xs: "2px",
      md: "8px",
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
  blockCard: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "8px",
      md: "6px",
      lg: "8px",
    },
    "@media (min-width: 768px)": {
      "&:hover .blockImages": {
        transform: "translateY(-5px)",
        backgroundColor: colors.accents.main,
      },
      "&:hover .containerImage": {
        transform: "translateY(5px)",
      },
      "&:hover .imagePhonesFirst": {
        zIndex: 0,
        transform: {
          md: "translateY(-25px) translateX(-10px)",
          lg: "translateY(-50px) translateX(-25px)",
        },
      },
      "&:hover .imagePhonesSecond": {
        zIndex: 1,
        transform: "translateY(30px)",
      },
      "&:hover .imageBase": {
        transform: "scale(1.2)",
      },
      "&:hover .imagePhone": {
        transform: "scale(1.1) ",
      },
      "&:hover .imageCalendar": {
        transform: {
          md: "scale(1.2) translateY(5px)",
          lg: "scale(1.25) translateY(10px)",
        },
      },
      "&:hover .textTitle:after": {
        opacity: 1,
        transform: "scaleX(1)",
      },
    },
  },

  blockImages: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: {
      xs: colors.accents.main,
      md: "gray.timeSlot",
    },
    height: {
      xs: "200px",
      md: "180px",
      lg: "302px",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  },
  containerImage: {
    display: "flex",
    position: "absolute",
    height: "100%",
    width: "80%",
    maxWidth: {
      xs: "300px",
      md: "285px",
      lg: "330px",
    },
    minWidth: {
      xs: "200px",
      md: "160px",
    },
    transition: "transform 0.3s ease-in-out",
  },
  containterPhones: {
    position: "relative",
    ml: {
      xs: "20%",
      md: "25%",
      lg: "20%",
    },
    width: "100%",
    maxWidth: {
      xs: "208px",
      md: "170px",
      lg: "400px",
    },
  },
  imagePhone: {
    border: {
      xs: "2px solid black",
      lg: "3px solid black",
    },
    right: {
      xs: "0px",
      lg: "-20px",
    },
    maxHeight: {
      xs: "230px",
      md: "300px",
      lg: "270px",
    },
    mt: {
      xs: "45px",
      md: "64px",
      lg: "77px",
    },
    maxWidth: {
      xs: "90px",
      md: "90px",
      lg: "120px",
    },
    minWidth: {
      xs: "80px",
      md: "70px",
    },
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
    borderRadius: "5px",
  },
  imagePhonesFirst: {
    left: 0,
    zIndex: {
      xs: 0,
      md: 1,
    },
    border: {
      xs: "2px solid black",
      lg: "3px solid black",
    },
    mt: {
      xs: "20px",
      md: "45px",
      lg: "74px",
    },
    maxWidth: {
      xs: "115px",
      md: "102px",
      lg: "163px",
    },
    maxHeight: {
      xs: "270px",
      md: "239px",
      lg: "383px",
    },
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
    borderRadius: "5px",
  },
  imagePhonesSecond: {
    border: {
      xs: "2px solid black",
      lg: "3px solid black",
    },
    mt: {
      xs: "49px",
      md: "18px",
      lg: "33px",
    },
    maxWidth: {
      xs: "115px",
      md: "102px",
      lg: "163px",
    },
    maxHeight: {
      xs: "270px",
      md: "239px",
      lg: "383px",
    },
    width: "100%",
    height: "100%",
    position: "absolute",
    right: "0",
    transition: "transform 0.5s ease-in-out",
    borderRadius: "5px",
  },
  imageCalendar: {
    mt: {
      xs: "20px",
      md: "32px",
    },
    mr: {
      xs: "35px",
      md: "35px",
    },
    maxHeight: {
      xs: "250px",
      md: "175px",
      lg: "264px",
    },
    maxWidth: {
      xs: "300px",
      md: "230px",
      lg: "287px",
    },
    minWidth: {
      xs: "200px",
      md: "160px",
    },
    border: {
      xs: "2px solid black",
      lg: "3px solid black",
    },
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    borderRadius: "5px",
  },
  imageBase: {
    mx: "auto",
    border: {
      xs: "2px solid black",
      lg: "3px solid black",
    },
    my: {
      xs: "15px",
      md: "23px",
      lg: "45px",
    },
    maxHeight: {
      xs: "174px",
      md: "130px",
      lg: "216px",
    },
    maxWidth: {
      xs: "265px",
      md: "250px",
      lg: "330px",
    },
    minWidth: {
      xs: "200px",
      md: "160px",
    },
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    borderRadius: "5px",
  },
  blockText: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "6px",
      md: "8px",
      lg: "12px",
    },
    width: "100%",
    backgroundColor: "gray.timeSlot",
    borderRadius: "10px",
    p: {
      xs: "24px",
      md: "26px 16px",
      lg: "36px 20px",
    },
  },
  textTitle: {
    fontFamily: fonts.title,
    textTransform: "uppercase",
    fontSize: { xs: "18px", lg: "32px" },
    fontWeight: 700,
    lineHeight: {
      xs: "21px",
      md: "23px",
      lg: "40px",
    },
    letterSpacing: "0.01em",
    "@media screen and (max-width: 1023px) and (min-width: 768px)": {
      width: "150px",
    },
    display: "inline-block",
    position: "relative",
    width: "fit-content",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#FFC904",
      opacity: 0,
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
    },
  },
  textDescription: {
    color: colors.text.secondary,
    fontSize: { xs: "14px", lg: "18px" },
    fontWeight: { xs: 400, md: 300, lg: 400 },
    lineHeight: { xs: "17.6px", lg: "22.6px" },
    letterSpacing: "0.01em",
    textAlign: "left",
  },
};
