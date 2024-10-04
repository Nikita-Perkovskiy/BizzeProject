import { fontSize } from "config/styles/fonts";

export const styles = {
  formContainer: (isMobileScreen: boolean) => ({
    display: "flex",
    flexDirection: isMobileScreen ? "column" : "row",
    justifyContent: "space-between",
    maxWidth: {
      xs: "100%",
      lg: "1321px",
    },
    margin: "0 auto",
    "& .MuiGrid-item": {
      pt: {
        xs: "12px",
        md: "0px",
      },
      pl: {
        xs: "0px",
        md: "12px",
        lg: "18px",
      },
    },
    "& .MuiGrid-item:first-of-type": {
      pl: "0px",
      pt: "0px",
    },
    "& .MuiGrid-item:last-child": {
      pt: {
        xs: "20px",
        md: "0px",
      },
    },
  }),
  searchBox: {
    "&.MuiAutocomplete-root": {
      maxWidth: "unset",
    },
    "& .MuiFormControl-root.MuiTextField-root": {
      "& .MuiInputBase-root": {
        height: {
          xs: "50px",
          lg: "70px",
        },
        p: {
          xs: "10px",
          lg: "15px",
        },
        pl: {
          xs: "30px !important",
          lg: "45px !important",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "text.secondary",
        },
        "& .MuiAutocomplete-endAdornment": {
          right: "0px",
          left: {
            xs: "10px",
            lg: "15px",
          },
          "& .MuiButtonBase-root": {
            pt: "4px",
            pl: "0px",
          },
        },
        "& .MuiInputBase-input": {
          pt: {
            xs: "3px",
            lg: "7.5px",
          },
        },
      },
      "& .MuiButtonBase-root.MuiIconButton-root": {
        transform: "unset",
      },
    },
  },
  locationSelectBox: (isLargeScreen: boolean) => ({
    width: {
      xs: "100%",
      md: isLargeScreen ? "246px" : "191px",
      lg: "345px",
    },
  }),
  googleAutocompleteMain: {
    width: "100%",
    "& .MuiInputBase-root.MuiAutocomplete-inputRoot.MuiInput-root": {
      mt: "0px",
      p: {
        xs: "10px",
        lg: "15px",
      },
      pr: "45px",
      backgroundColor: "background.default",
      height: {
        xs: "50px",
        lg: "70px",
      },
    },
    "& .MuiAutocomplete-endAdornment": {
      right: "15px",
    },
    "& .MuiAutocomplete-clearIndicator": {
      visibility: "visible",
      display: "flex",
    },
    "& .MuiAutocomplete-input.MuiInputBase-input.MuiInput-input": {
      p: "0px",
      fontSize: fontSize.m,
    },
    "&.Mui-focused .MuiInputBase-root.MuiAutocomplete-inputRoot.MuiInput-root":
      {
        py: "9px",
        pr: "44px",
        pl: "15px",
      },
    "&.Mui-focused .MuiAutocomplete-endAdornment": {
      right: "14px",
    },
  },
  welcomeBlockFormButton: {
    transition: "all 0.5s ease",
    width: "100%",
    height: {
      xs: "50px",
      lg: "70px",
    },
    fontSize: fontSize.l,
    fontWeight: "700",
    display: "flex",
    gap: "10px",
    color: "text.primary",
    "& > div > div:first-of-type": {
      mr: "10px",
    },
    "& > div > div > svg": {
      opacity: "1 !important",
    },
  },
  iconRight: {
    marginTop: "5px",
  },
};
