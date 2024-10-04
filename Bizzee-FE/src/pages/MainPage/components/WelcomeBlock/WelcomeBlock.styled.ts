import { fonts, fontSize } from "config/styles/fonts";

export const styles = {
  blockWrapper: {
    pt: {
      xs: "115px",
      md: "210px",
      lg: "280px",
    },
  },
  blockTitle: (isLargeScreen: boolean, isMobileScreen: boolean) => ({
    "&.MuiTypography-root": {
      fontFamily: fonts.title,
      fontSize: {
        xs: fontSize.xxl,
        md: isLargeScreen ? fontSize.xxl : fontSize.xl,
        lg: fontSize.xxxl,
      },
      fontWeight: {
        xs: "500",
        md: "700",
      },
      lineHeight: {
        xs: "61px",
        md: isLargeScreen ? "61px" : "44px",
        lg: "84px",
      },
      letterSpacing: {
        xs: "4px",
        md: "7px",
        lg: "4px",
      },
      color: "text.primary",
      textAlign: isMobileScreen ? "start" : "center",
      textTransform: "uppercase",
      mb: {
        xs: "45px",
        md: "50px",
        lg: "45px",
      },
    },
  }),
  animatedContainer: (isLargeScreen: boolean) => ({
    display: "inline-block",
    width: {
      md: isLargeScreen ? "230px" : "170px",
      lg: "350px",
    },
    textAlign: "end",
  }),
};
