import { fontSize } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  card: (status: boolean) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "&:not(:last-child)": {
      marginBottom: {
        sm: "10px",
        md: "20px",
        lg: "30px",
      },
    },
    boxShadow: status ? shadows.main : "none",
  }),
  section: {
    pt: {
      xs: "80px",
      md: "130px",
      lg: "170px",
    },
    pb: {
      xs: "110px",
      md: "40px",
      lg: "50px",
    },
  },
  wrapper: {
    display: {
      xs: "flex",
    },
    gap: {
      md: "25px",
      lg: "80px",
    },
  },
  menuWrapper: {
    minWidth: "195px",
    "@media (min-width: 768px) and (max-width: 1023px)": { display: "none" },
    display: {
      xs: "none",
      md: "flex",
    },
    flexDirection: "column",
    gap: "20px",
  },
  menuName: {
    lineHeight: {
      md: "40.8px",
      lg: "61.2px",
    },
    fontSize: {
      md: "24px",
      lg: fontSize.xxl,
    },
    fontWeight: 500,
    textTransform: "uppercase",
    pl: "20px",
    mb: "25px",
  },
  logOutBtn: {
    width: "max-content",
    p: "5px",
    marginTop: "20px",
    marginLeft: "40px",
    border: "none",
    fontWeight: 400,
    lineHeight: 1.25,
    color: "text.primary",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:focus": {
      outline: "2px solid",
      outlineColor: colors.text.primary,
    },
  },
};
