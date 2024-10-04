import { fontSize } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  blockWrapper: {
    position: "relative",
  },
  categoryList: {
    width: "100%",
    fontSize: fontSize.s,
    overflow: "hidden",
    userSelect: "none",
  },
  motionBlock: {
    display: "flex",
    maxWidth: "100px",
  },
  titleBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray.disabled",
    height: "48px",
    width: "fit-content",
    maxWidth: "160px",
    minWidth: "149px",
    cursor: "pointer",
  },
  titleBlockActive: {
    height: "50px",
    borderBottom: `2px solid ${colors.text.primary}`,
  },
  titleText: {
    fontWeight: 300,
    whiteSpace: "nowrap",
  },
  divider: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    bgcolor: "text.dividers",
  },
  skeletonTitle: {
    width: "80px",
    height: "20px",
  },
};
