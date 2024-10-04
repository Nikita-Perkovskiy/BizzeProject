import { fontSize, fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  wrapperBlock: {
    display: "flex",
    flexDirection: "column",
    mt: {
      xs: "50px",
      md: "90px ",
      lg: "180px ",
    },
  },

  gallaryWrapper: {
    width: "100%",
  },
  slideWrapper: {
    width: {
      xs: "300px",
      md: "432px",
      lg: "462px",
    },
    height: {
      xs: "293px",
      lg: "392px",
    },
    borderRadius: "9px",
  },
  wrapperButtons: (isLargeScreen: boolean) => ({
    m: "36px auto 0",
    pr: {
      md: isLargeScreen ? "70px" : "50px",
      lg: "0px",
    },
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    width: "100%",
    maxWidth: {
      lg: "1425px",
    },
  }),
  wrapperButton: {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    p: "15px",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "text.primary",
    color: "white",
  },
  disabledButton: {
    background: colors.gray.timeSlot,
    color: "black",
    cursor: "default",
  },
  chevronLeft: {
    transform: "rotate(90deg) ",
  },
  chevronRight: {
    transform: "rotate(-90deg) ",
  },
  moreBlock: {
    p: {
      xs: "0px 100px 30px 30px",
      lg: "0px 0px 40px 40px",
    },
    height: {
      xs: "293px",
      lg: "392px",
    },
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  seeMoreText: {
    fontFamily: fonts.text,
    fontSize: {
      xs: fontSize.xl,
      lg: "36px",
    },
    fontWeight: 500,
    color: "text.primary",
    width: "100%",
    textAlign: "left",
  },
  seeMoreBtn: {
    width: {
      xs: "180px",
      lg: "200px",
    },
    height: {
      xs: "50px",
      lg: "70px",
    },
    borderRadius: {
      xs: "6px",
      lg: "10px",
    },
    fontSize: {
      sx: "16px",
      lg: "18px",
    },
    fontFamily: fonts.text,
  },
  buttonShevron: {
    mt: "2px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    transform: "rotate(-90deg) ",
  },
};
