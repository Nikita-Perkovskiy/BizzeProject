export const styles = {
  select: {
    color: "text.primary",
    "& .MuiSelect-icon": {
      top: "50%",
      transform: "translateY(-50%)",
      color: "text.primary",
    },
    "&.Mui-disabled .MuiSelect-icon": {
      color: "gray.disabled",
    },
    "& .MuiSelect-iconOpen": {
      top: "50%",
      transform: "rotate(180deg) translateY(50%)",
    },
    "&::before,&::after": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-input:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiInputBase-input:focus ~ .MuiSelect-icon": {
      outline: "2px solid",
      outlineColor: "text.primary",
      borderRadius: "6px",
    },
    "&.Mui-disabled::before": {
      borderBottom: "none",
    },
  },
};
