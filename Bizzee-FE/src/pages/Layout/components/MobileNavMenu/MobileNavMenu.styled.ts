import { fonts } from "config/styles/fonts";

export const styles = {
  menuContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    display: { md: "none" },
    zIndex: 1600,
  },
  navWrapper: {
    height: "50px",
  },
  navLink: {
    borderTop: "1px solid",
    borderColor: "text.secondary",
    minWidth: "auto",
    maxWidth: "none",
    gap: "3px",
    "&>svg": {
      width: "20px",
      height: "20px",
      color: "text.secondary",
    },
    "&>.MuiBottomNavigationAction-label": {
      color: "text.secondary",
      fontSize: "12px",
      fontFamily: fonts.text,
    },
    "&.active": {
      borderTop: "2px solid",
      borderColor: "accents.main",
      "&>svg": {
        color: "accents.main",
      },
      "&>.MuiBottomNavigationAction-label": {
        color: "accents.main",
      },
    },
  },
};
