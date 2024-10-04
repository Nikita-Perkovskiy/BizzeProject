export const styles = {
  searchWrapper: {
    paddingTop: {
      xs: "30px",
    },
    paddingBottom: {
      xs: "40px",
    },
    backgroundColor: "text.primary",
    borderRadius: {
      xs: "10px",
      md: "0",
    },
  },
  inputsWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    justifyContent: {
      lg: "center",
    },
    mx: "auto",
    maxWidth: {
      xs: "600px",
      md: "768px",
      lg: "1920px",
    },
  },
  input: {
    "& .MuiInputBase-root": {
      backgroundColor: "background.default",
      marginTop: 0,
      height: {
        lg: "70px",
      },
      "& input::placeholder": {
        color: "text.primary",
        opacity: "0.7",
      },
    },
  },
  icon: {
    cursor: "pointer",
  },
  searchInput: {
    marginBottom: {
      xs: "10px",
      md: "20px",
      lg: 0,
    },
    marginRight: {
      lg: "20px",
    },
    maxWidth: {
      lg: "900px",
    },
  },
  bottomWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    gap: {
      xs: "20px",
      lg: "30px",
    },
  },
  button: {
    height: {
      xs: "50px",
      lg: "70px",
    },
    width: "100%",
    minWidth: {
      md: "305px",
      lg: "300px",
    },
    maxWidth: {
      xs: "330px",
    },
    mx: {
      xs: "auto",
      md: 0,
    },
    borderRadius: {
      lg: "10px",
    },
  },
};
