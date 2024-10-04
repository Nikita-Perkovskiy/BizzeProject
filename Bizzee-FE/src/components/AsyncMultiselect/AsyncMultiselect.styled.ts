export const styles = {
  autocompleteInput: {
    width: "100%",
    "& .MuiAutocomplete-endAdornment .MuiAutocomplete-clearIndicator": {
      visibility: "unset",
    },
    "& .MuiFormLabel-root": {
      transform: "unset",
    },
    "& .MuiInputBase-root.MuiInput-root": {
      pb: "10px",
      mt: "25px",
      "&.Mui-error": {
        p: "9px 29px 9px 15px",
      },
      "&.Mui-focused": {
        p: "9px 29px 9px 15px",
      },
    },
  },
  errorIcon: {
    height: "100%",
    position: "absolute",
    right: "15px",
    top: "calc(50% - 15px)",
  },
  option: {
    height: "50px",
    p: "8px 12px",
    "&.MuiAutocomplete-option.Mui-focused": {
      backgroundColor: "accents.hover",
    },
    "&.MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
      backgroundColor: "accents.hover",
    },
    "&.MuiAutocomplete-option[aria-selected='true']": {
      backgroundColor: "unset",
    },
  },
  textField: {
    "& .MuiInputBase-input.MuiAutocomplete-input.MuiInputBase-input": {
      p: 0,
    },
  },
  loadingText: {
    display: "flex",
    justifyContent: "space-between",
  },
};
