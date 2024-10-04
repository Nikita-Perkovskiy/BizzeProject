import { colors } from "config/styles/themeColors";

export const styles = {
  contentBlock: {
    position: "relative",
    background: colors.background.default,
    zIndex: 2,
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      background: colors.background.default,
      width: "100%",
      height: "60px",
      borderRadius: "0 0 45px 45px",
    },
  },
  footer: {
    mt: {
      xs: "-87px",
      md: " 0px",
      lg: "-33px",
    },
    position: "relative",
    zIndex: 1,
    "@media (min-width: 768px) and (max-width: 1023px)": {
      mt: "-53px",
    },
  },
};
