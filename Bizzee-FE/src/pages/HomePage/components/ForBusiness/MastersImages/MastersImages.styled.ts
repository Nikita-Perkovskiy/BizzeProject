export const styles = {
  photosContainer: {
    paddingLeft: {
      xs: "30px",
      md: "0",
    },
    display: "flex",
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
    borderColor: "accents.main",
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
