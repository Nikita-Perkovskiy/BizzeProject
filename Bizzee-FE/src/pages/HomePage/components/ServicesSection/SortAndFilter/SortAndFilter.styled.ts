export const styles = {
  filtersWrapper: {
    display: "flex",
    alignItems: "center",
    gap: {
      xs: "15px",
      md: "20px",
    },
    width: "100%",
    maxWidth: {
      xs: "330px",
      md: "320px",
      lg: "360px",
    },
  },
  filtersButton: {
    height: {
      xs: "50px",
      lg: "45px",
    },
    width: {
      xs: "100%",
    },
    maxWidth: {
      md: "140px",
    },
    display: "flex",
    gap: "8px",
    borderRadius: "4px",
    border: "1px solid rgba(45, 45, 45, 0.40)",
    color: "currentColor",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  selectWrapper: {
    width: {
      xs: "100%",
    },
    height: {
      xs: "50px",
      lg: "45px",
    },
    border: "1px solid rgba(45, 45, 45, 0.40)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sortingSelect: {
    width: "max-content",
  },
};
