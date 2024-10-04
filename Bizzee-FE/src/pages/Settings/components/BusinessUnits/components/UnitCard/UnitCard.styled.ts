import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    fontSize: "16px",
  },
  unitName: {
    fontWeight: 700,
    textTransform: "capitalize",
  },
  unitCity: {
    fontWeight: 400,
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
  unitInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
  },
  unitBlockWrapper: {
    display: "flex",
    flexDirection: {
      sm: "column",
      md: "row",
    },
    gap: "10px",
    justifyContent: {
      md: "space-between",
    },
  },
  unitBlockItems: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "200px",
  },
  unitBlock: {
    display: "flex",
    gap: "8px",
  },
  infoIcon: {
    color: `${colors.text.secondary}`,
    marginTop: "4px",
    width: "18px",
    height: "18px",
  },
  unitValue: {
    color: "text.primary",
  },
  unitTitle: {
    color: "text.secondary",
  },
  unitDescr: {
    fontSize: {
      xs: "16px",
    },
    fontWeight: 400,
    lineHeight: 1.3,
  },
  categoryWrapper: {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    margin: "30px 0",
  },
  categoryDescr: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  unitCategory: {
    padding: "8px 10px",
    backgroundColor: "background.default",
    borderRadius: "10px",
    boxShadow: shadows.main,
  },
  unitPanelWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
  },
  unitPanelHours: {
    display: "flex",
    minWidth: "140px",
    gap: "8px",
  },
  unitPanelAction: {
    display: "flex",
    gap: "16px",
  },
  switchButton: {
    zIndex: 3,
  },
  menuItem: {
    pl: 0,
    pr: 0,
    fontWeight: 400,
    "&.Mui-selected": {
      fontWeight: 700,
    },
  },
  itemsMenuWrapper: {
    p: "20px 30px",
  },
};
