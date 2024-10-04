export const styles = {
  autocompleteMain: {
    width: "100%",
    "& .MuiInputBase-root.MuiAutocomplete-inputRoot.MuiInput-root": {
      mt: "25px",
      py: {
        xs: "10px",
      },
      pr: {
        xs: "45px",
      },
    },
    "& .MuiAutocomplete-endAdornment": {
      right: "15px",
    },
    "& .MuiAutocomplete-clearIndicator": {
      visibility: "visible",
      display: "flex",
    },
    "& .MuiInputLabel-root": {
      transform: "none",
      "&.Mui-disabled": {
        color: "currentColor",
      },
    },
    "& .MuiAutocomplete-input.MuiInputBase-input.MuiInput-input": {
      height: "30px",
      p: "0px",
      fontSize: "16px",
    },
    "&.Mui-focused .MuiInputBase-root.MuiAutocomplete-inputRoot.MuiInput-root":
      {
        py: {
          xs: "9px",
        },
        pr: {
          xs: "44px",
        },
        pl: {
          xs: "15px",
        },
      },
    "&.Mui-focused .MuiAutocomplete-endAdornment": {
      right: "14px",
    },
  },
  popper: {
    "& .MuiAutocomplete-listbox > .MuiAutocomplete-option.Mui-focused": {
      backgroundColor: "accents.hover",
    },
  },
};
