import { fontSize, fonts } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";

export const styles = {
  aboutWrapper: {
    display: "flex",
    flexDirection: "column",
    mt: {
      xs: "75px",
      md: "120px",
      lg: "160px",
    },
  },
  mobileBannerAndLogo: {
    position: "relative",
    borderRadius: "10px",
    p: 0,
    height: {
      xs: "350px",
      md: "245px",
    },
  },
  mainLayout: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1023px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    "@media (min-width: 1919px)": {
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      gridTemplateRows: "repeat(auto-fill, minmax(135px, auto))",
    },
  },
  cardMedia: {
    gridArea: {
      lg: "1 / 1 / 4 / 11",
    },
    position: "relative",
    borderRadius: "10px",
    maxHeight: "400px",
    boxShadow: "none",
    overflow: {
      xs: "visible",
      md: "hidden",
    },
  },
  favorite: {
    position: "absolute",
    right: "10px",
    top: "10px",
    zIndex: 10,
    borderRadius: "50%",
    p: "10px",
    width: "40px",
    heigth: "40px",
    backgroundColor: "accents.main",
    cursor: "pointer",
    "& > svg": {
      width: "18px",
      height: "16px",
      color: "text.primary",
    },
    "&:hover": {
      backgroundColor: "accents.main",
    },
  },
  mobileBanner: {
    borderRadius: "10px",
    width: "100%",
    minHeight: "245px",
    objectFit: "cover",
    objectPosition: "center",
    maxHeight: {
      xs: "350px",
      md: "245px",
    },
    ml: {
      md: "140px",
    },
  },
  mobileLogo: {
    position: "absolute",
    width: "220px",
    height: "220px",
    border: "10px solid",
    borderColor: "background.default",
    bottom: {
      xs: "5px",
      md: "50%",
    },
    left: {
      xs: "50%",
      md: "30px",
    },
    right: {
      xs: "50%",
      md: "auto",
    },
    transform: {
      xs: "translate(-50%, 50%)",
      md: "translate(0, 50%)",
    },
  },
  desctopBanner: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "10px",
    ml: "115px",
  },
  desctopLogo: {
    position: "absolute",
    width: "220px",
    height: "220px",
    border: "10px solid",
    borderColor: "background.default",
    top: "-108px",
    left: "-5px",
    transform: "translate(0, 50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  salonInfoWrapper: {
    gridArea: {
      lg: "2 / 1 / 7 / 5",
    },
    width: "100%",
    maxWidth: "520px",
    borderRadius: "10px",
    pt: {
      xs: 0,
      lg: "30px",
    },
    pr: {
      xs: 0,
      lg: "40px",
    },
    backgroundColor: "background.default",
    zIndex: 10,
    "@media (min-width: 1023px)": {
      maxWidth: "475px",
    },
    "@media (min-width: 1919px)": {
      maxWidth: "520px",
    },
  },
  titlePart: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minHeight: "70px",
  },
  salonStatus: (isActive?: boolean) => ({
    borderRadius: "10px",
    p: "5px 10px",
    width: "fit-content",
    backgroundColor: isActive ? "background.open" : "background.closed",
    color: isActive ? "success.main" : "error.main",
    "& > p": {
      fontWeight: 700,
      lineHeight: "20px",
      fontSize: fontSize.m,
    },
  }),
  title: {
    textTransform: "uppercase",
  },
  titleText: {
    fontSize: {
      xs: fontSize.l,
      md: fontSize.xl,
      lg: fontSize.xxl,
    },
    fontFamily: fonts.title,
    letterSpacing: {
      xs: "4px",
      md: "6px",
      lg: "8px",
    },
    fontWeight: 500,
    lineHeight: "170%",
  },
  services: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px 30px",
    "& > p": {
      fontSize: fontSize.m,
      lineHeight: "20px",
      color: "text.secondary",
    },
  },
  descriptionPart: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    mt: "30px",
  },
  description: {
    minHeight: "70px",
    "& > p": {
      fontSize: fontSize.m,
      fontWeight: 300,
      lineHeight: "20px",
      color: "text.primary",
    },
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    minHeight: "30px",
    "& > p": {
      borderRadius: "10px",
      maxWidth: "fit-content",
      fontWeight: 700,
      lineHeight: "20px",
      fontSize: fontSize.m,
      color: "text.tags",
      backgroundColor: "background.tags",
      p: "5px 10px",
    },
  },

  contactDetailsWrapper: {
    gridArea: {
      lg: "7 / 6 / 4 / 11",
    },
    mt: "30px",
    justifySelf: "end",
    alignContent: "flex-end",
    "@media (min-width: 1023px)": {
      mt: "15px",
    },
    "@media (min-width: 1919px)": {
      gridArea: "7 / 6 / 4 / 11",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column-reverse",
    gap: "40px",
    borderRadius: "10px",
    boxShadow: shadows.main,
    p: "30px 40px",
    maxWidth: "100%",
    "@media (min-width: 560px)": {
      flexDirection: "row",
      maxWidth: "550px",
    },
    "@media (min-width: 1023px)": {
      flexDirection: "column-reverse",
      maxWidth: "293px",
    },
    "@media (min-width: 1919px)": {
      maxWidth: "535px",
      flexDirection: "row",
    },
  },
};
