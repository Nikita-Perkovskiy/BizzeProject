import { fontSize } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";
import { hexToRgba } from "utils/hexToRgba";

export const styles = {
  daysWrapper: {
    display: "flex",
    flexDirection: {
      sm: "column",
      md: "row",
    },
    alignItems: {
      sm: "flex-start",
      md: "center",
    },
    justifyContent: "space-between",
    width: "100%",
    "@media (max-width:1919px)": {
      maxWidth: "550px",
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
    fontSize: fontSize.m,
    "& > p": {
      fontWeight: 300,
    },
  },

  timeInputsWrapper: {
    position: "relative",
    maxWidth: "100%",
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
    "& > div": {
      minWidth: "125px",
      maxWidth: "140px",
    },
    "& .react-datepicker__input-container > input:disabled": {
      color: "gray.disabled",
      cursor: "not-allowed",
      borderColor: "gray.disabled",
      backgroundColor: hexToRgba(colors.gray.disabled, 0),
    },
    "@media (min-width:450px)": {
      maxWidth: "300px",
    },
  },

  dash: {
    position: "absolute",
    display: "contents",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&::after": {
      content: '""',
      position: "absolute",
      backgroundColor: "text.primary",
      width: "9px",
      height: "1px",
      top: {
        md: "50%",
        sm: "65%",
      },
      left: "50%",
      transform: "translateX(-50%)",
    },
  },

  timeSelect: {
    "& > svg": {
      color: "text.secondary",
    },
    "& .MuiInputBase-root.MuiInput-root": {
      pb: "10px",
      mt: {
        md: "0",
        sm: "25px",
      },
      "&.Mui-error": {
        p: "9px 29px 9px 15px",
      },
      "&.Mui-focused": {
        p: "9px 29px 9px 15px",
      },
    },
  },
};
