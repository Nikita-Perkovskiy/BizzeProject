import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  wrapperInfo: {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    p: "5px",
  },

  infoBox: {
    position: "absolute",
    bottom: "60%",
    left: "-305%",
    transform: "translateX(-50%)",
    mb: "1px",
    p: "10px 15px 5px",
    bgcolor: colors.background.default,
    boxShadow: shadows.main,
    borderRadius: 1,
    zIndex: 5,
  },
};
