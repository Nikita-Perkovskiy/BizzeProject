export const styles = {
  myProfileMenu: {
    "& .MuiPaper-root": {
      p: "0 20px 55px",
      color: "text.primary",
      width: "100%",
      height: "95svh",
    },
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    gap: "5px",
  },
  avatar: {
    width: "53px",
    height: "53px",
    alignSelf: "center",
  },
  name: {
    fontWeight: "500",
    color: "text.primary",
    fontSize: "14px",
    lineHeight: 1.3,
    letterSpacing: ".14px",
  },
  myProfileMenuItem: {
    fontSize: "16px",
    fontWeight: "400",
    width: "100%",
    p: "25px 0",
    borderBottom: "1px solid",
    borderColor: "text.secondary",
    "&:first-of-type": {
      pt: "20px",
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
  chevronLeft: {
    cursor: "pointer",
    m: "30px 0",
  },
};
