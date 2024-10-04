import { colors } from "config/styles/themeColors";

export const styles = {
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "12px 0",
  },
  headerWrapper: {
    fontSize: "16px",
  },
  serviceName: {
    maxWidth: {
      sm: "220px",
      md: "280px",
    },
    fontWeight: 700,
    textTransform: "lowercase",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  serviceCity: {
    fontWeight: 400,
  },
  cardActions: {
    gap: {
      sm: "23px",
      md: "30px",
    },
  },
  chevron: {
    "& > svg": {
      color: "text.primary",
      width: "20px",
      height: "20px",
      zIndex: 3,
    },
  },
  chevronDown: {
    transform: "rotate(180deg)",
  },
  iconMore: {
    backgroundColor: "gray.disabled",
  },
  showMore: {
    cursor: "pointer",
    color: "link.main",
    border: "none",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(243, 243, 243, 0.6)",
    zIndex: 2,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
    gap: {
      sm: "20px",
      lg: "30px",
    },
  },
  serviceBlock: {
    display: "flex",
    gap: "8px",
  },
  infoIcon: {
    color: `${colors.text.secondary}`,
    marginTop: "4px",
    minWidth: "18px",
    height: "18px",
  },
  serviceValue: {
    display: "flex",
    alignItems: "center",
    color: "text.primary",
    textTransform: "lowercase",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  serviceCurency: {
    color: "text.primary",
  },
  serviceTitle: {
    color: "text.secondary",
  },
  serviceDescr: {
    fontSize: {
      xs: "16px",
    },
    fontWeight: 400,
    lineHeight: 1.3,
  },
  servicePanelWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
  },
  servicePanel: {
    display: "flex",
    minWidth: "140px",
    gap: "8px",
  },
  servicePanelAction: {
    display: "flex",
    gap: "16px",
  },
  switchButton: {
    zIndex: 3,
  },
  menuWrapper: {
    maxWidth: "180px",
  },
  menuItemsWrapper: {
    p: "20px 20px",
  },
  showMoreMenuItem: {
    pl: 0,
    pr: 0,
    fontWeight: 400,
    "&.Mui-selected": {
      fontWeight: 700,
    },
  },
};
