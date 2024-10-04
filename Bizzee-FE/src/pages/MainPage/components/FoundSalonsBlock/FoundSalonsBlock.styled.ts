import { fontSize } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";

export const styles = {
  blockWrapper: {
    pt: {
      xs: "70px",
      md: "120px",
      lg: "160px",
    },
    pl: {
      xs: "5px",
      md: "0px",
    },
    pr: {
      xs: "5px",
      md: "0px",
    },
  },
  searchContainer: {
    padding: {
      xs: "30px 20px",
      md: "30px 50px",
      lg: "30px 0",
    },
    backgroundColor: "text.primary",
    "& .MuiAutocomplete-root .MuiFormControl-root.MuiTextField-root .MuiInputBase-root":
      {
        backgroundColor: "background.default",
      },
  },
  contentWrap: {
    width: "100%",
    maxWidth: "1424px",
    minHeight: "calc(100vh - 836px)",
    margin: "0 auto",
  },
  gridContainter: {
    gap: "40px",
    pb: "60px",
    pt: {
      xs: "40px",
      md: "60px",
    },
  },
  cardWrapper: {
    flexGrow: 1,
    p: "30px 40px",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    boxShadow: shadows.main,
    borderRadius: "10px",
    "@media (max-width: 668px)": {
      flexDirection: "column",
      p: "20px 30px",
    },
    cursor: "pointer",
  },
  contentBlock: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  statusRatingBlock: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    mb: "5px",
  },
  proceduresBlock: {
    display: "flex",
    maxWidth: "630px",
    flexWrap: "wrap",
    gap: "5px 30px",
    mt: "20px",
    color: "text.secondary",
    fontWeight: 400,
  },
  avatarLogo: {
    height: "200px",
    width: "200px",
    flexShrink: "0",
    "@media (max-width: 924px)": {
      width: "150px",
      height: "150px",
    },
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
  titleSalon: {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "170%",
    letterSpacing: "8px",
    textTransform: "uppercase",
    fontFamily: "Comfortaa, sans-serif",
  },
  noOptions: {
    fontWeight: 300,
    textAlign: "center",
    m: {
      xs: "40px 0",
      md: "60px 0",
    },
    minHeight: "calc(100vh - 956px)",
    margin: "0 auto",
  },
  seeMoreBtn: (isDisabled: boolean) => ({
    display: isDisabled ? "none" : "block",
    width: "174px",
    height: "50px",
    borderRadius: "6px",
    ml: "calc(50% - 87px)",
    mr: "calc(50% - 87px)",
    mb: {
      xs: "48px",
      md: "100px",
      lg: "84px",
    },
  }),
  highlight: {
    color: "accents.main",
  },
};
