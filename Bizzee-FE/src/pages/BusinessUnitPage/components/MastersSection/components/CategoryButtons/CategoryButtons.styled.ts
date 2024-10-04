export const styles = {
  sortButton: {
    minWidth: "min-content",
    whiteSpace: "nowrap",
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
  skeletonButton: {
    borderRadius: "30px",
    width: "100px",
    height: "30px",
  },
};
