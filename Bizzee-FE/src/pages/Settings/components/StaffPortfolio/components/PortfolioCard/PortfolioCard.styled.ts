import { fonts } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  cardWrapper: {
    width: "100%",
    maxWidth: {
      xs: "300px",
      lg: "350px",
    },
    height: "410px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "text.primary",
    borderRadius: "8px",
  },
  contentContainer: {
    height: "370px",
    overflow: "hidden",
    position: "relative",
    "& .swiper": {
      height: "100%",
      borderRadius: "8px",
    },
    "& .swiper-pagination-bullet": {
      width: "10px",
      height: "10px",
      opacity: 1,
      backgroundColor: "unset",
      border: "1px solid",
      borderColor: "text.secondary",
    },
    "& .swiper-pagination-bullet-active": {
      backgroundColor: "accents.main",
      borderColor: "accents.main",
    },
    "& .swiper-slide": {
      width: "100% !important",
    },
  },
  cardHeader: {
    p: "20px 15px 0 20px",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    "& .MuiTypography-root.MuiTypography-h5": {
      fontSize: "unset",
      lineHeight: "unset",
    },
    "& .MuiCardHeader-action": {
      m: 0,
    },
  },
  categoryTag: {
    height: "unset",
    p: "5px 8px",
    backgroundColor: "accents.main",
    fontFamily: fonts.text,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 1,
    textTransform: "uppercase",
    "& .MuiChip-label": {
      p: 0,
    },
  },
  menuBtn: {
    width: "30px",
    height: "30px",
    p: 0,
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.20)",
    },
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.20)",
    },
  },
  descriptionContainer: {
    p: "20px 20px 0 20px",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    transition: "transform 250ms ease-out",
    background:
      "linear-gradient(0deg, #2D2D2D 35.2%, rgba(45, 45, 45, 0.51) 100%)",
    color: "background.default",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  descriptionShown: {
    transform: "translateY(0)",
  },
  descriptionHidden: {
    transform: "translateY(100%)",
  },
  descriptionText: {
    mb: "20px",
  },
  tagsContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  tagText: {
    padding: "8px 10px",
    border: "1px solid",
    borderColor: "text.secondary",
    borderRadius: "10px",
    fontSize: "14px",
    lineHeight: 1,
  },
  actions: {
    height: "40px",
    p: 0,
    justifyContent: "center",
  },
  iconBtn: {
    width: "40px",
    height: "100%",
    stroke: colors.background.default,
  },
  iconBtnOpen: {
    "&>svg": {
      transform: "rotate(0)",
    },
  },
  iconBtnClosed: {
    "&>svg": {
      transform: "rotate(180deg)",
    },
  },
  cardMenu: {
    "&.portfolioCard .MuiPopover-paper": {
      px: "40px",
      py: "20px",
      width: "unset",
    },
    "&.portfolioCard .MuiList-root": {
      p: 0,
    },
  },
  menuItem: {
    height: "50px",
    p: "10px 15px",
  },
  menuItemIcon: {
    "&.menuIcon.MuiListItemIcon-root": {
      minWidth: "unset",
    },
    mr: "10px",
  },
};
