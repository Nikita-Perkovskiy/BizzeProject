export const styled = {
  textField: {
    position: "relative",
    "& .MuiInputBase-root::before": {
      content: "none",
    },
    "& .MuiInputBase-root::after": {
      borderBottom: "none",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      position: "absolute",
      top: "70px",
    },
  },
  counterFocusedStyles: {
    "& .MuiInputBase-formControl.MuiInputBase-multiline.Mui-focused .MuiInputAdornment-positionEnd":
      {
        bottom: "9px",
        right: "14px",
      },
    "& .MuiInputBase-formControl.MuiInputBase-multiline.Mui-error .MuiInputAdornment-positionEnd":
      {
        bottom: "9px",
        right: "14px",
      },
  },
  label: {
    transform: "unset",
  },
};
