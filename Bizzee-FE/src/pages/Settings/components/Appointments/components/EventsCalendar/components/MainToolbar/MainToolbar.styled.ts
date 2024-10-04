export const styles = {
  switcherWrapper: {
    display: "flex",
    gap: "10px",
    mb: "40px",
    mt: "30px",
  },
  switcherWrapperMaster: {
    display: "flex",
    justifyContent: "right",
    mb: "40px",
    gap: "10px",
  },
  switcherBtn: (condition: boolean) => ({
    height: "35px",
    px: "20px",
    borderRadius: "30px",
    border: "1px  solid",
    borderColor: condition ? "text.primary" : "text.secondary",
    bgcolor: condition ? "text.primary" : "background.default",
    color: condition ? "background.default" : "text.secondary",
    textTransform: "capitalize",
    fontWeight: 400,
    "&:hover": {
      bgcolor: condition ? "text.primary" : "background.default",
    },
    transition: "unset",
  }),
  toolbarPaper: {
    padding: {
      md: "20px 0 30px",
    },
  },
  toolbarWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navigation: {
    width: "100%",
    maxWidth: {
      md: "350px",
    },
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
    px: "20px",
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
  datePickerWrapper: {
    position: "absolute",
    zIndex: 1,
    left: "50%",
    top: "105%",
    transform: "translateX(-50%)",
  },
};
