import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  customIcon: {
    width: "20px",
    height: "20px",
    border: `2px solid #000000`,
    borderRadius: "50%",
  },
  customCheckIcon: {
    position: "relative",
    width: "20px",
    height: "20px",
    padding: "3px 3px 3px 3px",
    border: `2px solid #000000`,
    borderRadius: "50%",
  },
  checkDrop: {
    position: "absolute",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: colors.accents.main,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  errorText: {
    marginTop: "8px",
    fontFamily: fonts.text,
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: 0,
    lineHeight: "normal",
    color: colors.error.main,
  },
};
