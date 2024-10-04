import { colors } from "config/styles/themeColors";

export const styles = {
  signInBtn: {
    minWidth: "40px",
    width: { xs: "40px", md: "138px", lg: "170px" },
    height: "40px",
    fill: colors.text.primary,
    "& > svg": {
      display: {
        md: "none",
      },
    },
    "&:active": {
      fill: colors.accents.main,
    },
  },
  signInBtnText: {
    display: {
      xs: "none",
      md: "inline",
    },
  },
};
