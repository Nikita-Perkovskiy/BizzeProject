export const styles = {
  headerWrapper: {
    mb: {
      xs: "30px",
      md: "40px",
      lg: "30px",
    },
  },
  titleWrapper: {
    mb: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
  },
  titleContainer: {},
  headerTitle: {
    mb: {
      xs: "5px",
      lg: "10px",
    },
    fontSize: "24px",
    lineHeight: "normal",
    textTransform: "uppercase",
    color: "text.primary",
    gap: "5px",
  },
  headerContent: {
    display: "inline-block",
    lineHeight: "normal",
    color: "text.secondary",
  },
  headerButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  actionBtnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      lg: "center",
    },
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: "30px",
  },
  sortingWrapper: {
    ml: "auto",
  },
  pageWrapper: {
    pt: {
      xs: "30px",
      md: "40px",
    },
    pl: {
      md: "40px",
      lg: "0",
    },
    pr: {
      md: "0",
      lg: "0",
    },
  },
  searchInput: {
    mb: {
      xs: "30px",
      lg: "35px",
    },
  },
  paper: {
    ["@media (min-width: 768px)"]: {
      maxWidth: "380px",
    },
    ["@media (min-width: 1152px)"]: {
      maxWidth: "700px",
    },
    ["@media (min-width: 1472px)"]: {
      maxWidth: "1020px",
    },
    ["@media (min-width: 1920px)"]: {
      maxWidth: "1120px",
    },
    mx: "auto",
    mb: "10px",
  },
  gridContainer: {
    ["@media (min-width: 300px)"]: {
      justifyContent: "center",
    },
    ["@media (min-width: 702px)"]: {
      justifyContent: "flex-start",
    },
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    ["@media (min-width: 0px)"]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
    ["@media (min-width: 600px)"]: {
      maxWidth: "calc(100%/2)",
      flexBasis: "calc(100%/2)",
    },
    ["@media (min-width: 768px)"]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
    ["@media (min-width: 1152px)"]: {
      maxWidth: "calc(100%/2)",
      flexBasis: "calc(100%/2)",
    },
    ["@media (min-width: 1472px)"]: {
      maxWidth: "calc(100%/3)",
      flexBasis: "calc(100%/3)",
    },
    ["@media (min-width: 1920px)"]: {
      maxWidth: "calc(100%/3)",
      flexBasis: "calc(100%/3)",
    },
  },
  mainContentBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    pt: {
      xs: "120px",
      md: "50px",
      lg: "120px",
    },
    pb: {
      xs: "120px",
      md: "50px",
      lg: "70px",
    },
  },
  mainContentText: {
    maxWidth: {
      xs: "300px",
      lg: "390px",
    },
    mb: "30px",
    display: "inline-block",
    color: "text.secondary",
  },
  mainContentButton: {
    display: {
      xs: "none",
      md: "block",
    },
  },
  filtersWrapper: {
    display: "flex",
    alignItems: "center",
    gap: {
      xs: "15px",
      md: "20px",
    },
    width: "100%",
    maxWidth: {
      xs: "330px",
      md: "320px",
      lg: "360px",
    },
  },
  selectWrapper: {
    width: "100%",
    px: "20px",
    height: "50px",
    border: "1px solid rgba(45, 45, 45, 0.40)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sortingSelect: {
    width: "max-content",
  },
};
