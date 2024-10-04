import { fontSize } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  typeOfDays: {
    mb: "5px",
  },
  text: {
    display: "flex",
    color: colors.text.primary,
    fontSize: fontSize.xs,
    whiteSpace: "nowrap",
    textAlign: "left",
  },
  typeOfDaysSpan: {
    display: "block",
    height: "20px",
    width: "20px",
    textAlign: "center",
    borderRadius: "4px",
    mr: "10px",
  },
};
