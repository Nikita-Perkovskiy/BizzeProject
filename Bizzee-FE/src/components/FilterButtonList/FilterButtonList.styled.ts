export const styles = {
  filtersWrapper: {
    gap: "10px",
    borderRadius: 0,
  },
  filterBtn: {
    height: "35px",
    px: "20px",
    m: 0,
    border: "1px solid",
    borderRadius: "30px",
    borderColor: "text.secondary",
    color: "text.secondary",
    "&:hover": {
      backgroundColor: "accents.hover",
      borderColor: "accents.hover",
    },
    "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
      m: 0,
      border: "1px solid",
      borderRadius: "30px",
      borderColor: "text.secondary",
      color: "text.secondary",
      "&:hover": {
        backgroundColor: "accents.hover",
        borderColor: "accents.hover",
        color: "background.default",
      },
      "&.Mui-selected": {
        borderColor: "text.primary",
        color: "background.default",
        "&:hover": {
          backgroundColor: "accents.hover",
          borderColor: "accents.hover",
        },
      },
    },
    "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
      m: 0,
      border: "1px solid",
      borderRadius: "30px",
      borderColor: "text.secondary",
      color: "text.secondary",
      "&:hover": {
        backgroundColor: "accents.hover",
        borderColor: "accents.hover",
        color: "background.default",
      },
      "&.Mui-selected": {
        borderColor: "text.primary",
        color: "background.default",
        "&:hover": {
          backgroundColor: "accents.hover",
          borderColor: "accents.hover",
        },
      },
    },
    "&.Mui-selected": {
      backgroundColor: "text.primary",
      borderColor: "text.primary",
      color: "background.default",
      "&:hover": {
        backgroundColor: "accents.hover",
        borderColor: "accents.hover",
      },
    },
    transition:
      "100ms ease-in-out color, 100ms ease-in-out background-color, 100ms ease-in-out border-color",
  },
  filterText: {
    textTransform: "none",
  },
};
