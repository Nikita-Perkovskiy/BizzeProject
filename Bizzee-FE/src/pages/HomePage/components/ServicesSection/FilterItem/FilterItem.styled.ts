export const styles = {
  itemWrapper: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: {
      xs: "155px",
      lg: "350px",
    },
    height: {
      xs: "60px",
      lg: "130px",
    },
    position: "relative",
    "& .filterBorder": {
      width: {
        xs: "155px",
        lg: "350px",
      },
      height: {
        xs: "60px",
        lg: "130px",
      },
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    "& .filterIcon": {
      width: {
        xs: "65px",
        lg: "140px",
      },
      height: {
        xs: "65px",
        lg: "140px",
      },
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translateY(-50%)",
    },
  },
  filterName: {
    fontSize: {
      xs: "14px",
      lg: "26px",
    },
    lineHeight: {
      lg: "1",
    },
    fontWeight: {
      lg: "500",
    },
    textTransform: {
      lg: "uppercase",
    },
  },
};
