export const styles = {
  rectangleWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    display: "flex",
    justifyContent: "center",
    "& .mobileRectangle": {
      position: "relative",
      top: "50px",
      display: {
        md: "none",
      },
    },
    "& .tabletRectangle": {
      position: "relative",
      top: "80px",
      display: {
        xs: "none",
        md: "block",
        lg: "none",
      },
    },
    "& .desktopBlackRectangle": {
      position: "absolute",
      top: 60,
    },
    "& .desktopYellowRectangle": {
      position: "relative",
    },
  },
  desktopRectangle: {
    position: "relative",
    top: 120,
    left: 0,
    right: 0,
    bottom: 0,
    display: {
      xs: "none",
      lg: "block",
    },
  },
};
