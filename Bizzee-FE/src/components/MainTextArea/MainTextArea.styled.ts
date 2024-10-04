export const styles = {
  textarea: {
    minHeight: "75px",
  },
  counterStyles: {
    height: "100%",
    position: "absolute",
    bottom: "10px",
    right: "15px",
    color: "text.primary",
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
  inputTextarea: {
    height: "100% !important",
    overflow: "auto !important",
  },
};
