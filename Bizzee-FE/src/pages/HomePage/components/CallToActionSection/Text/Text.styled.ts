import { fonts } from "config/styles/fonts";

export const styles = {
  textContainer: {
    marginBottom: {
      xs: "30px",
      md: "40px",
    },
  },
  text: {
    textAlign: "center",
    fontFamily: fonts.title,
    fontSize: {
      xs: "25px",
      md: "35px",
      lg: "50px",
    },
    lineHeight: {
      xs: 1.35,
      md: 1.65,
      lg: 1.17,
    },
    letterSpacing: {
      xs: "2px",
      md: "4px",
      lg: "11px",
    },
    textTransform: "uppercase",
  },
  companyName: {
    color: "accents.main",
  },
};
