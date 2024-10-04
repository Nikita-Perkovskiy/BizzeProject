export const styles = {
  contentWrapperStyles: (
    isTabletScreen: boolean,
    isLargeScreen: boolean,
    isLandingHeader: boolean,
  ) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1550,
    backgroundColor: "background.default",
    borderBottom: {
      xs: "1px solid",
      md: "none",
    },
    borderColor: {
      xs: "text.primary",
    },
    "& .MuiContainer-root": {
      pl: {
        md: isLandingHeader ? (isLargeScreen ? "70px" : "50px") : "80px",
        lg: isLandingHeader ? "0px" : "250px",
      },
      pr: {
        md: isLandingHeader ? (isLargeScreen ? "70px" : "50px") : "50px",
        lg: isLandingHeader ? "0px" : "250px",
      },
    },
  }),
  headerSectionStyles: (isLandingHeader: boolean) => ({
    height: {
      xs: "45px",
      md: "90px",
      lg: "120px",
    },
    maxWidth: {
      xs: isLandingHeader ? "100%" : "unset",
      lg: isLandingHeader ? "1424px" : "unset",
    },
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    borderBottom: {
      xs: "none",
      md: "1px solid",
    },
    borderColor: {
      md: "text.primary",
    },
  }),
  personalizationBoxStyles: {
    marginRight: {
      xs: "12px",
      md: "38px",
      lg: "50px",
    },
    display: "flex",
    alignItems: "center",
    gap: {
      xs: "8px",
      md: "20px",
    },
  },
};
