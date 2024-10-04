import { shadows } from "config/styles/shadows";
import { colors } from "config/styles/themeColors";

export const styles = {
  chevronLeft: {
    "& > svg": {
      color: "text.primary",
      width: "20px",
      transform: "rotate(90deg)",
    },
  },
  createButtonWrapper: {
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: "70px",
    left: "20px",
    right: "20px",
    "@media (min-width:768px)": {
      position: "static",
      marginTop: "50px",
      justifyContent: "end",
    },
  },
  detailsHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: "10px 12px 0",
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    p: "20px 40px 30px",
  },
  actionWrapper: {
    width: "100%",
  },
  select: {
    display: "flex",
    alignItems: "center",
    mt: "5px",
    p: "3px 15px",
    borderRadius: "5px",
    border: `1px solid ${colors.text.secondary}`,
    width: "100%",
    "& .MuiSelect-root, .MuiSelect-icon": {
      right: "15px",
      "& > svg": {
        color: "text.secondary",
      },
    },
    "& .MuiSelect-select": {
      "& > svg": {
        display: "none",
      },
    },
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontWeight: 400,
    "&.Mui-selected": {
      "& .MuiTypography-root": {
        fontWeight: 700,
      },
    },
  },
  showMoreMenu: {
    "& .MuiPaper-root": {
      width: "182px",
      p: "20px 40px",
      borderRadius: "10px",
      boxShadow: shadows.main,
    },
  },
  showMoreMenuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "& .MuiListItemIcon-root": {
      minWidth: "auto",
    },
  },
  listItem: {
    "& > img": {
      maxWidth: "20px",
    },
  },
  delete: {
    color: "error.main",
  },
};
