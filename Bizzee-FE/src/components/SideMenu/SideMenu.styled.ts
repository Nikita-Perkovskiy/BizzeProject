export const styles = {
  menuWrapper: {
    position: "relative",
  },
  menuList: {
    pl: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  menuLink: {
    fontSize: "16px",
    lineHeight: 1.25,
    textTransform: "uppercase",
    "& > a": {
      color: "text.primary",
    },
    "& > a.active": {
      color: "accents.main",
      textDecoration: "underline",
      fontWeight: 700,
      position: "relative",
    },
  },
  slider: {
    '& input[type="range"]': {
      writingMode: "vertical-lr",
      direction: "rtl",
    },
    height: "calc(100% + 15px)",
    width: "1px",
    position: "absolute",
    top: "-22px",
    left: 0,
    "&.Mui-disabled": {
      color: "accents.main",
    },
    "& .MuiSlider-thumb": {
      height: "25px",
      width: "25px",
    },
    "& .MuiSlider-track": {
      borderColor: "gray.secondary",
    },
  },
};
