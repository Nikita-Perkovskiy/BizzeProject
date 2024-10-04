export const styles = {
  myProfileBtn: {
    border: "none",
    color: "accents.main",
    borderRadius: "8px",
    bgcolor: "transparent",
    "&:hover": {
      color: "accents.hover",
      bgcolor: "transparent",
    },
    "&:focus": {
      borderColor: "accents.main",
      bgcolor: "transparent",
    },
    "&:default": {
      borderColor: "gray.disabled",
      bgcolor: "transparent",
    },
  },
  myProfileTitle: {
    ml: "10px",
  },
};
