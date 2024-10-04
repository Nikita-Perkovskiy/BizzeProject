export const styles = {
  drawerHeader: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: {
      xs: "start",
      md: "center",
    },
    m: "0 auto",
    p: {
      xs: "40px",
      md: "0 10%",
      lg: "0 10%",
    },
    textAlign: "center",
  },
  closeIcon: {
    position: {
      xs: "static",
      md: "absolute",
    },
    top: "50px",
    cursor: "pointer",
    left: {
      xs: "75px",
      lg: "50px",
    },
  },
  closeIconInvisible: {
    display: "none",
  },
  drawerLogo: {
    display: "flex",
    maxWidth: "1410px",
    width: "100%",
    m: "0 auto",
    p: "30px 0",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    "& .css-1myih72": {
      width: "100%",
      justifyContent: "center",
    },
  },
};
