export const styles = {
  drawer: {
    zIndex: "1700",
    "& .MuiDrawer-paper": {
      height: {
        xs: "calc(100vh - 50px)",
        md: "100vh",
      },
      width: {
        xs: "100%",
        lg: "55%",
      },
      py: "60px",
      px: {
        xs: "20px",
        md: "70px",
      },
      borderTopLeftRadius: {
        xs: "10px",
        md: 0,
      },
      borderTopRightRadius: {
        xs: "10px",
        md: 0,
      },
    },
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    left: {
      lg: "70px",
    },
    right: {
      xs: "20px",
      md: "70px",
      lg: 0,
    },
  },
  drawerContent: {
    width: {
      lg: "690px",
    },
  },
  title: {
    mb: "30px",
    textAlign: "center",
    fontSize: {
      lg: "44px",
    },
    lineHeight: {
      lg: 1.05,
    },
    letterSpacing: {
      lg: "6px",
    },
    "&:after": {
      content: "''",
      display: {
        xs: "none",
        md: "block",
      },
      width: "100%",
      mt: {
        md: "10px",
      },
      borderBottom: "1px solid black",
    },
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: {
      xs: "center",
      md: "right",
    },
    gap: "20px",
  },
  cancelBtn: {
    height: "50px",
    width: {
      xs: "100%",
      md: "180px",
    },
    display: {
      xs: "none",
      md: "flex",
    },
  },
  addBtn: {
    height: "50px",
    width: {
      xs: "100%",
      md: "180px",
    },
    maxWidth: {
      xs: "450px",
    },
  },
  categoriesInput: {
    width: {
      md: "300px",
    },
    mb: {
      xs: "10px",
      md: "20px",
    },
  },
  textArea: {
    mb: {
      xs: "40px",
    },
  },
};
