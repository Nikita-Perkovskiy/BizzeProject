export const styles = {
  header: {
    zIndex: 100,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "background.default",
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > a": {
      width: "50px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },
  title: {
    fontWeight: 500,
  },
  closeButton: {
    width: "20px",
    height: "20px",
    mb: "30px",
  },
  menuName: {
    mb: "20px",
    textTransform: "uppercase",
  },
  mobileMenu: {
    "& .MuiDrawer-paper": {
      width: "70%",
      p: "20px",
      pb: "80px",
    },
  },
  listItem: {
    "&>a": {
      width: "100%",
      p: "20px 5px",
      color: "text.primary",
      textTransform: "uppercase",
      "&.active": {
        color: "accents.main",
        textDecoration: "underline",
      },
    },
  },
  arrowIcon: {
    width: "24px",
    height: "24px",
    transform: "rotate(90deg)",
  },
};
