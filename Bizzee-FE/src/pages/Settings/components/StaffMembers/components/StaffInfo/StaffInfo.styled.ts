import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  icon: {
    stroke: `${colors.text.primary}`,
    width: "20px",
    height: "20px",
  },
  infoIcon: {
    marginTop: "4px",
    minWidth: "18px",
    height: "18px",
  },
  userInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "30px",
  },
  userInfoBlock: {
    display: "flex",
    gap: "8px",
  },
  userInfoDescr: {
    fontSize: {
      xs: "16px",
    },
    fontWeight: 400,
    lineHeight: 1.3,
  },
  userInfoTitle: {
    color: "text.secondary",
  },
  userInfoValue: {
    color: "text.primary",
  },
  userInfoPanelWrapper: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "30px",
    marginTop: "10px",
    padding: {
      sm: "30px 20px",
      lg: "21px 20px",
    },
    borderRadius: "10px",
    backgroundColor: "background.default",
    boxShadow: shadows.main,
  },
  userInfoPanelDate: {
    display: "flex",
    alignItems: "center",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: {
      sm: "30px",
      lg: "75px",
    },
  },
  userInfoPanelAction: {
    display: "flex",
    gap: "16px",
  },
  switchButton: {
    zIndex: 3,
  },
};
