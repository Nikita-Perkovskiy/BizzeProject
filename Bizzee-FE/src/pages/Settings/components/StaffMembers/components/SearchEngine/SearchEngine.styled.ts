export const styles = {
  input: {
    "& .MuiInputBase-root": {
      backgroundColor: "background.default",
      marginTop: 0,
      height: {
        lg: "50px",
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
  },
};
