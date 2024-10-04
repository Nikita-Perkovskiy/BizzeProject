export const styles = {
  sortButtonWrapper: {
    display: "flex",
    justifyContent: {
      sm: "center",
      lg: "flex-start",
    },
    gap: "20px",
    marginBottom: {
      sm: "30px",
      md: "20px",
      lg: "40px",
    },
  },
  sortButton: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "normal",
    borderRadius: "30px",
    padding: "6px 20px",
    border: "1px solid",
    color: "gray.disabled",
    "&:hover": {
      backgroundColor: "accents.hover",
    },
    "&:active": {
      backgroundColor: "text.primary",
      color: "background.default",
    },
    "&:disabled": {
      backgroundColor: "gray.disabled",
      color: "background.default",
    },
  },
  activeSortButton: {
    backgroundColor: "text.primary",
    color: "background.default",
  },
};
