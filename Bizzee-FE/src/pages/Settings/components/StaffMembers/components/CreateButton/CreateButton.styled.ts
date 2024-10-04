import { colors } from "config/styles/themeColors";

export const styles = {
  createButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    borderRadius: "30px",
    backgroundColor: colors.text.primary,
    cursor: "pointer",
    "&.Mui-disabled": {
      backgroundColor: colors.gray.disabled,
      cursor: "not-allowed",
    },
  },
};
