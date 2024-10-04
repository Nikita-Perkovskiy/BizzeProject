import { colors } from "config/styles/themeColors";
import { hexToRgba } from "utils/hexToRgba";

export const styles = {
  customDatesHeader: {
    display: "flex",
    alignItems: "center",
    gap: {
      xs: "20px",
      md: "30px",
    },
  },
  actionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: {
      md: "center",
    },
    alignItems: "center",
  },
  actionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "20px",
      md: "30px",
    },
  },
  selectWrapper: {
    minWidth: {
      xs: "300px",
      lg: "400px",
    },
    maxWidth: {
      md: "300px",
      lg: "400px",
    },
  },
  select: (isDisabled: boolean) => ({
    display: "flex",
    alignItems: "center",
    mt: "5px",
    p: "8px 15px",
    borderRadius: "5px",
    border: "1px solid",
    borderColor: `${isDisabled ? "text.secondary" : "gray.disabled"}`,
    width: "100%",
    maxWidth: "300px",
    "& .MuiSelect-root, .MuiSelect-icon": {
      right: "15px",
      "& > svg": {
        color: "text.secondary",
      },
    },
    "& .MuiSelect-select": {
      "& > svg": {
        display: "none",
      },
    },
  }),
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontWeight: 400,
    "&.Mui-selected.Mui-focusVisible": {
      backgroundColor: "transparent",
    },
    "&.Mui-selected": {
      "& .MuiTypography-root": {
        fontWeight: 700,
      },
    },
  },
  daySwitcherWrapper: {
    display: "flex",
    alignItems: {
      xs: "flex-start",
      md: "center",
    },
    justifyContent: "flex-between",
    gap: "10px",
  },
  customPickersWrapper: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: hexToRgba(colors.gray.disabled, 0),
    zIndex: 2,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
