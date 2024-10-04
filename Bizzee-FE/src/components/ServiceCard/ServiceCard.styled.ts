const styles = {
  cardContainer: {
    height: "100%",
    width: {
      xs: "100%",
    },
    border: "1px solid",
    borderColor: "text.primary",
    boxShadow: "none",
    borderRadius: "8px",
  },
  contentContainer: {
    height: "100%",
    minHeight: {
      xs: "230px",
      lg: "460px",
    },
    position: "relative",
  },
  typeBadge: {
    padding: {
      xs: "5px 8px",
    },
    position: "absolute",
    top: {
      xs: "12px",
      lg: "20px",
    },
    left: {
      xs: "12px",
      lg: "20px",
    },
    display: "inline-flex",
    backgroundColor: "accents.main",
    borderRadius: "30px",
  },
  typeContent: {
    color: "text.primary",
    fontSize: {
      xs: "10px",
      lg: "14px",
    },
    fontWeight: "500",
    lineHeight: {
      xs: "1.4",
      lg: "1",
    },
    letterSpacing: {
      xs: "-0.04px",
      lg: "-0.06px",
    },
    textTransform: "uppercase",
  },
  ratingBadge: {
    padding: "2px 8px",
    position: "absolute",
    top: {
      xs: "95px",
      lg: "20px",
    },
    right: {
      xs: "0px",
      lg: "20px",
    },
    backgroundColor: "text.primary",
    borderRadius: "7px",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    "& > svg": {
      width: "20px",
      height: "20px",
    },
  },
  ratingNumber: {
    fontSize: "12px",
    lineHeight: "1",
    letterSpacing: "0.25px",
    color: "background.default",
  },
  reviewsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    color: "background.default",
  },
  reviews: {
    fontSize: "7px",
    lineHeight: "1.71",
    letterSpacing: "0.25px",
  },
  cardImage: {
    height: {
      xs: "120px",
      lg: "270px",
    },
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  textWrapper: {
    color: "text.primary",
    "&:last-child": {
      paddingBottom: {
        xs: "5px",
      },
    },
    py: {
      xs: "5px",
      lg: "30px",
    },
    px: {
      lg: "20px",
    },
  },
  cardTitle: {
    marginBottom: "10px",
    fontSize: {
      lg: "24px",
    },
    fontWeight: "700",
    lineHeight: {
      xs: "2",
      lg: "1.33",
    },
    textTransform: "uppercase",
    letterSpacing: {
      xs: "0.15px",
      lg: "0.25px",
    },
  },
  description: {
    marginBottom: "5px",
    lineHeight: {
      xs: "normal",
      lg: "1.5",
    },
  },
  location: {
    fontSize: {
      xs: "12px",
      lg: "16px",
    },
    color: "text.secondary",
    lineHeight: {
      xs: "2",
      lg: "1.5",
    },
  },
};

export const defineCardStyles = (isDealsCard: boolean) => {
  if (isDealsCard) {
    return {
      ...styles,
      contentContainer: {
        ...styles.contentContainer,
        minHeight: {
          xs: "270px",
          md: "460px",
        },
      },
      ratingBadge: {
        ...styles.ratingBadge,
        top: {
          xs: "95px",
          md: "20px",
        },
        right: {
          xs: "0px",
          md: "20px",
        },
      },
      cardImage: {
        ...styles.cardImage,
        height: {
          xs: "120px",
          md: "270px",
        },
      },
      textWrapper: {
        ...styles.textWrapper,
        py: {
          xs: "5px",
          md: "30px",
        },
      },
      cardTitle: {
        ...styles.cardTitle,
        fontSize: {
          md: "24px",
        },
        lineHeight: {
          xs: "2",
          md: "1.33",
        },
        letterSpacing: {
          xs: "0.15px",
          md: "0.25px",
        },
      },
      description: {
        ...styles.description,
        lineHeight: {
          xs: "normal",
          md: "1.5",
        },
      },
      location: {
        ...styles.location,
        fontSize: {
          xs: "12px",
          md: "16px",
        },
        lineHeight: {
          xs: "2",
          md: "1.5",
        },
      },
    };
  }

  return styles;
};
