export const styles = {
  toolbarPaper: {
    padding: {
      xs: "20px 10px",
    },
    mb: "20px",
  },
  toolbarWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navigation: {
    width: "100%",
    maxWidth: {
      xs: "320px",
      md: "unset",
    },
    px: "5px",
    mb: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navigationBtn: {
    minWidth: "unset",
    width: "30px",
    height: "30px",
    border: "none",
    color: "text.primary",
    "&:hover": {
      bgcolor: "unset",
    },
    "& svg.right-icon": {
      transform: "rotate(-90deg)",
    },
    "& svg.left-icon": {
      transform: "rotate(90deg)",
    },
  },
  dateRange: (isOpen: boolean) => ({
    position: "relative",
    height: "40px",
    px: "12%",
    display: "inline-flex",
    alignItems: "center",
    fontWeight: 700,
    border: "1px solid",
    borderColor: isOpen ? "accents.main" : "text.secondary",
    borderRadius: "3px",
    cursor: "pointer",
    userSelect: "none",
    textWrap: "nowrap",
  }),
  rangeText: {
    fontWeight: 700,
  },
  daysWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: {
      xs: "320px",
      md: "unset",
    },
  },
  dayBtnWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  dateBtn: (condition: boolean) => ({
    bgcolor: condition ? "accents.main" : "unset",
    width: "35px",
    height: "35px",
    minWidth: "unset",
    borderRadius: "50%",
    border: "1px solid",
    borderColor: "accents.main",
    color: condition ? "background.default" : "text.primary",
    fontWeight: condition ? 700 : 400,
    transition: "unset",
    "&:hover": {
      bgcolor: condition ? "accents.main" : "background.default",
    },
  }),
  dayText: (condition: boolean) => ({
    color: "accents.main",
    fontWeight: condition ? 700 : 400,
  }),
  datePickerWrapper: {
    position: "absolute",
    zIndex: 1,
    left: "50%",
    top: "105%",
    transform: "translateX(-50%)",
  },
};
