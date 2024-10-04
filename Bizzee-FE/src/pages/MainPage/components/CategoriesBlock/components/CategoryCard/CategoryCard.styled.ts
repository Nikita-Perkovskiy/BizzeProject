import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  gridItem: {
    display: "flex",
    width: "100%",
    cursor: "pointer",
  },
  cardWrapper: (styleActive: boolean) => ({
    display: "flex",
    justifyContent: "space-between",
    height: {
      xs: "137px",
      lg: "152px",
    },
    width: "100%",
    borderRadius: "8px",
    backgroundColor: styleActive ? colors.text.primary : colors.gray.timeSlot,
    color: styleActive ? colors.background.default : colors.text.primary,
    "&:hover": {
      backgroundColor: colors.text.primary,
      color: colors.background.default,
    },
  }),
  titleWrapper: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    flex: 1,
  },
  titleBlock: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    mr: "20px",
    ml: "15px",
  },
  arrowBlock: {
    position: "absolute",
    right: 0,
    bottom: 0,
    mr: "15px",
  },
  iconRightBig: {
    color: colors.accents.main,
    mr: "20px",
  },
  image: {
    display: "flex",
    alignItems: "center",
    width: {
      lg: "103px",
      xs: "93px",
    },
  },
  imageSize: {
    width: "100%",
    height: "100%",
  },
  title: {
    font: fonts.text,
    fontWeight: 500,
    fontSize: {
      xs: "25px",
      lg: "32px",
    },
    lineHeight: {
      xs: "32px",
      lg: "40px",
    },
  },
  arrowColor: {
    color: colors.accents.main,
  },
};
