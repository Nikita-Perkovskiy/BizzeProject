export const styles = {
  button: {
    width: "50px",
    height: "50px",
    color: "text.primary",
    "&:hover": {
      backgroundColor: "accents.hover",
    },
    "&:focus": {
      backgroundColor: "accents.main",
    },
    "&:active": {
      backgroundColor: "text.primary",
      color: "accents.main",
    },
    "&:disabled": {
      backgroundColor: "gray.disabled",
      color: "background.default",
    },
  },
};
