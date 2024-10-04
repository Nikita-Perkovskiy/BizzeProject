export const styles = {
  contentWrapperStyles: {
    backgroundColor: "text.primary",
    position: "relative",
    "& .rectangle": {
      position: "absolute",
      top: "159px",
      left: "0",
      display: {
        md: "none",
      },
    },
    "& .tablet-rectangle": {
      position: "absolute",
      top: "-65px",
      right: "0",
      display: {
        xs: "none",
        md: "block",
        lg: "none",
      },
    },
  },
  footerSectionStyles: {
    padding: {
      xs: "35px 0 90px 0",
      md: "32px 0 24px 0",
      lg: "60px 0 93px 0",
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    alignItems: "center",
  },
  footerWrapper: {
    width: {
      xs: "100%",
    },
    marginBottom: {
      md: "70px",
      lg: 0,
    },
    display: {
      md: "flex",
    },
    alignItems: {
      md: "center",
    },
    justifyContent: {
      md: "space-between",
      lg: "flex-start",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: "143px",
      width: "100%",
      borderBottom: "1px solid",
      borderColor: "background.default",
      display: {
        xs: "none",
        md: "block",
        lg: "none",
      },
    },
  },
  mainText: {
    color: "background.default",
    lineHeight: {
      lg: "1.35",
    },
    letterSpacing: {
      lg: "0.16px",
    },
  },
  textContainer: {
    width: "321px",
    marginBottom: {
      xs: "40px",
      md: 0,
    },
  },
  logo: {
    color: "accents.main",
    lineHeight: {
      md: 1.11,
    },
  },
  logoWrapper: {
    marginBottom: {
      xs: "20px",
      md: "16px",
      lg: "5px",
    },
  },
  menu: {
    container: {
      width: "178px",
      marginLeft: {
        xs: "auto",
        md: 0,
      },
      marginBottom: {
        xs: "54px",
        md: 0,
      },
      display: "flex",
      flexDirection: {
        xs: "column",
        lg: "row",
      },
      alignItems: {
        lg: "center",
      },

      "&:before": {
        content: "''",
        width: {
          xs: "100%",
          lg: "0",
        },
        height: {
          lg: "178px",
        },
        marginBottom: {
          xs: "12px",
          lg: 0,
        },
        marginRight: {
          lg: "32px",
        },
        borderBottom: {
          xs: "1px solid",
          lg: "none",
        },
        borderLeft: {
          lg: "1px solid",
        },
        borderColor: {
          xs: "rgba(255, 255, 255, 0.60)",
          lg: "background.default",
        },
        display: {
          md: "none",
          lg: "block",
        },
      },
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: {
        xs: "14px",
        lg: "15px",
      },
    },
    item: {
      "&>a": {
        marginLeft: {
          xs: "auto",
          lg: 0,
        },
        color: "background.default",
        lineHeight: {
          xs: 1.25,
          lg: 1.78,
        },
        fontWeight: {
          xs: 500,
          lg: 700,
        },
        fontSize: {
          lg: "18px",
        },
        letterSpacing: {
          xs: "0.16px",
          lg: "0.18px",
        },
        textTransform: "uppercase",
      },
    },
  },
  supportMenu: {
    container: {
      width: {
        lg: "100%",
      },
    },
    list: {
      display: "flex",
      flexDirection: "column",

      gap: {
        xs: "4px",
        md: "5px",
      },
    },
    item: {
      "&>a": {
        margin: {
          xs: "0 auto",
          lg: "0 0 0 auto",
        },
        color: "background.default",
        opacity: 0.4,
        fontSize: {
          lg: "18px",
        },
        lineHeight: {
          xs: "normal",
          lg: 1.78,
        },
        letterSpacing: {
          lg: "0.18px",
        },
      },
    },
  },
};
