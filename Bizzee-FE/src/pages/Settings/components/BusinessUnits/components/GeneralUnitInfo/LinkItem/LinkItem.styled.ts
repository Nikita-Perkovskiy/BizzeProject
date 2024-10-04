import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  listItemWrapper: {
    position: {
      lg: "relative",
    },
  },
  socialListItem: {
    "& .MuiListItemIcon-root": {
      minWidth: "0px",
    },
    fontSize: "16px",
    lineHeight: 1.4,
    color: "text.primary",
    p: {
      xs: "0px",
      lg: "10px 0",
    },
  },
  dragIcon: {
    "&.MuiListItemIcon-root": {
      mr: "20px",
    },
  },
  socialIcon: {
    "&.MuiListItemIcon-root": {
      mr: "10px",
    },
  },
  linkBtn: {
    width: "120px",
    height: "40px",
  },
  invisibleLinkBtn: {
    display: "none",
  },
  invisibleLink: {
    display: "none",
  },
  linksChipItem: {
    position: {
      lg: "absolute",
    },
    top: {
      lg: "50%",
    },
    marginTop: {
      lg: "-20px",
    },
    right: {
      lg: "0px",
    },
    textOverflow: "ellipsis",
    fontFamily: fonts.text,
    height: "40px",
    backgroundColor: colors.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: {
      xs: "space-between",
    },
    paddingLeft: {
      xs: "40px",
      lg: "0px",
    },
    "& .MuiChip-label": {
      margin: "0px 8px 0px 0px",
      pl: "0px",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: colors.text.secondary,
    },
  },
};
