import { colors } from "config/styles/themeColors";

export const styles = {
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
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    gap: {
      sm: "20px",
      md: "20px",
      lg: "10px",
    },
    paddingLeft: "2px",
  },
  headerRole: {
    fontSize: "22px",
    fontWeight: "500",
    lineHeight: 1.7,
    textTransform: "lowercase",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
    gap: {
      sm: "10px",
      md: "17px",
      lg: "15px",
    },
  },
  cardDescr: {
    fontSize: {
      xs: "16px",
    },
    lineHeight: 1.3,
    flexGrow: 1,
    textAlign: "start",
    color: "text.secondary",
  },
  name: {
    fontWeight: "bold",
    color: "text.primary",
    fontSize: {
      xs: "16px",
    },
    lineHeight: 1.3,
    textTransform: "capitalize",
  },
  role: {
    color: "text.secondary",
    fontWeight: 400,
    textTransform: "lowercase",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
  email: {
    color: "text.primary",
    fontWeight: 700,
  },
  emailSecondary: {
    fontWeight: 400,
    color: "text.secondary",
  },
  avatar: {
    width: "60px",
    height: "60px",
    border: `2px solid ${colors.accents.main}`,
    alignSelf: "center",
  },
  chevronIcon: {
    alignSelf: "start",
    display: {
      lg: "none",
    },
    "& > svg": {
      color: "text.primary",
      width: "20px",
      height: "20px",
      zIndex: 3,
    },
  },
  chevron: {
    pt: "10px",
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
  roundIcon: {
    zIndex: 3,
  },
  infoIcon: {
    stroke: `${colors.text.secondary}`,
    zIndex: 3,
  },
  userActive: {
    color: `${colors.accents.active}`,
  },
  userInActive: {
    color: `${colors.error.main}`,
  },
  menuItem: {
    color: `${colors.text.primary}`,
  },
  showMoreMenuItem: {
    pl: 0,
    pr: 0,
    fontWeight: 400,
    "&.Mui-selected": {
      fontWeight: 700,
    },
  },
  menuItemsWrapper: {
    p: "20px 30px",
  },
};
