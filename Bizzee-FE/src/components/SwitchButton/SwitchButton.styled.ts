export const styles = {
  switchButton: {
    width: "52px",
    height: "32px",
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: "3.5px",
      transitionduration: "300ms",
      "&.Mui-disabled + .MuiSwitch-track": {
        backgroundColor: "gray.disabled",
        cursor: "not-allowed",
        opacity: 1,
      },
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "background.default",
        "& + .MuiSwitch-track": {
          backgroundColor: "accents.main",
          opacity: 1,
          border: 0,
        },
        "& .Mui-disabled": {
          backgroundColor: "gray.disabled",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: "25px",
      height: "25px",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "text.secondary",
      opacity: 1,
    },
  },
};
