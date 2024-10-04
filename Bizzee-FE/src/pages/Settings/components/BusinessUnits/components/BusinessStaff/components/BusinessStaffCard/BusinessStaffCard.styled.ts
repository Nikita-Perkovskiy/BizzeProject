import { colors } from "config/styles/themeColors";

export const styles = {
  avatar: {
    width: "60px",
    height: "60px",
    border: `2px solid ${colors.accents.main}`,
    alignSelf: "center",
    marginLeft: {
      lg: "25px",
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
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    gap: {
      sm: "5px",
      md: "10px",
    },
  },
  checkBox: {
    p: 0,
    zIndex: 5,
  },
  staffTitle: {
    fontSize: "16px",
  },
  staffName: {
    fontWeight: 700,
    textTransform: "capitalize",
  },
  role: {
    fontWeight: 400,
    color: "text.secondary",
    textTransform: "lowercase",
    "&:first-letter": {
      textTransform: "uppercase",
    },
  },
  cardActions: {
    gap: {
      sm: "23px",
      md: "30px",
    },
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
  },
  blockWrapper: {
    display: "flex",
    pr: "20px",
    flexDirection: {
      sm: "column",
      lg: "row",
    },
    gap: "20px",
    justifyContent: {
      md: "space-between",
    },
  },
  blockItems: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "fit-content",
  },
  infoBlock: {
    display: "flex",
    gap: "8px",
  },
  categoryWrapper: {
    display: "flex",
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
  infoIcon: {
    color: `${colors.text.secondary}`,
    marginTop: "4px",
    minWidth: "18px",
    height: "18px",
  },
  iconMore: {
    backgroundColor: "gray.disabled",
  },
  infoTitle: {
    color: "text.secondary",
  },
  infoDescr: {
    fontSize: {
      xs: "16px",
    },
    fontWeight: 400,
    lineHeight: 1.3,
  },
  select: {
    display: "flex",
    alignItems: "center",
    width: "130px",
    mt: "5px",
    p: "3px 15px",
    border: `1px solid ${colors.text.secondary}`,
    borderRadius: "5px",
    "& .MuiSelect-icon": {
      stroke: colors.text.primary,
      mr: "15px",
      mb: "3px",
    },
  },
};
