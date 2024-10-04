import { fonts } from "config/styles/fonts";
import { shadows } from "config/styles/shadows";

export const styles = {
  menuContainer: (isTablet: boolean) => ({
    position: "fixed",
    bottom: 0,
    left: 0,
    top: 0,
    borderRadius: 0,
    display: isTablet ? "flex" : "none",
    zIndex: 1700,
    boxShadow: shadows.main,
    paddingTop: "70px",
  }),
  firstLink: {
    position: "relative",
    marginBottom: "70px",
  },
  drawer: {
    "& .MuiDrawer-paper": {
      position: "fixed",
      top: 0,
      left: 0,
      width: "250px",
      paddingTop: "70px",
      boxShadow: shadows.main,
    },
  },
  menuIcon: {
    marginBottom: "10px",
    justifyContent: "left",
    padding: "0 0 0 18px",
  },
  menuName: {
    marginBottom: "45px",
    paddingLeft: "10px",
  },
  sideMenu: {
    flexDirection: "column",
    gap: "30px",
    height: "50vh",
    padding: "15px 0 0 10px",
    justifyContent: "flex-start",
  },
  navWrapper: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    justifyContent: "flex-start",
  },
  navLink: {
    minWidth: "auto",
    maxWidth: "none",
    gap: "10px",
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
      "&>svg": {
        color: "accents.main",
      },
      "&>.MuiBottomNavigationAction-label": {
        color: "accents.main",
      },
    },
  },
};
