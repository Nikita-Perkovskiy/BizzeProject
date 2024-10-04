export const styles = {
  wrapper: {
    height: {
      xs: "45px",
      md: "60px",
      lg: "65px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray.timeSlot",
    borderRadius: "5px",
  },
  addBtnSlot: {
    width: "100%",
    height: "100%",
    bgcolor: "unset",
    border: "none",
    color: "gray.disabled",
    transition: "unset",
    "&:hover": {
      backgroundColor: "unset",
    },
    "&:focus": {
      border: "1px solid",
      borderColor: "accents.main",
      backgroundColor: "background.default",
    },
  },
  eventSlot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    pr: "15px",
    border: "none",
    transition: "unset",
    mt: "-10px",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "unset",
    },
    "&:focus": {
      border: "1px solid",
      borderColor: "accents.main",
      backgroundColor: "background.default",
    },
  },
  eventText: {
    fontSize: 14,
    textAlign: "start",
    pl: "10px",
    lineHeight: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  procedureName: {
    color: "text.secondary",
  },
  events: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    width: "100%",

    "&:before": {
      content: "''",
      minWidth: "5px",
      height: "10px",
      display: "inline-flex",
    },
  },
  eventTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "14px",
    color: "text.primary",
    display: "inline-block",
  },
  showMoreText: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontSize: "12px",
    color: "link.mail",
    ml: {
      lg: "auto",
    },
  },
};
