export const styles = {
  photosContainer: {
    paddingRight: {
      xs: "30px",
      md: "0",
    },
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  },
  photoCard: {
    height: {
      xs: "40px",
      lg: "100px",
    },
    width: {
      xs: "40px",
      lg: "100px",
    },
    border: "2px solid",
    borderColor: "text.primary",
    borderRadius: {
      xs: "40px",
      lg: "100px",
    },
    "&:last-child": {
      display: {
        xs: "none",
        md: "block",
      },
    },
  },
};
