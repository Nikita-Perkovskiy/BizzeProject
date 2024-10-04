import { fonts, fontSize } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  cardWrapper: {
    cursor: "pointer",
  },
  swiperWrap: (isLargeScreen: boolean, isHovered: boolean) => ({
    transition: "margin 0.5s ease",
    mb: isHovered ? "20px" : "10px",
    mt: isHovered ? "-10px" : "0px",
    "& .swiper": {
      borderRadius: "10px",
      "& .MuiCardMedia-root": {
        borderRadius: "10px",
      },
      "& .swiper-pagination": {
        display: "flex",
        px: "20px",
        "& .swiper-pagination-bullet": {
          width: "50%",
          height: "4px",
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.38)",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "background.default",
        },
      },
      "& .swiper-button-prev": {
        color: "background.default",
        left: "20px",
      },
      "& .swiper-button-prev:after": {
        fontSize: fontSize.xl,
      },
      "& .swiper-button-next": {
        color: "background.default",
        right: "20px",
      },
      "& .swiper-button-next:after": {
        fontSize: fontSize.xl,
      },
    },
    "& .MuiCardMedia-root": {
      width: "100%",
      height: {
        xs: "270px",
        md: isLargeScreen ? "270px" : "198px",
      },
    },
  }),
  contentWrap: (isLargeScreen: boolean) => ({
    width: "auto",
    height: {
      xs: "calc(100% - 280px)",
      md: isLargeScreen ? "calc(100% - 280px)" : "calc(100% - 208px)",
    },
    p: "36px 20px",
    borderRadius: "10px",
    backgroundColor: "background.default",
    "&:last-child": {
      pb: "36px",
    },
  }),
  tagsWrap: {
    display: "flex",
    justifyContent: "space-between",
    mb: "20px",
  },
  tagText: {
    height: "unset",
    p: "8px 12px",
    backgroundColor: "accents.main",
    fontFamily: fonts.text,
    fontSize: fontSize.s,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "18px",
    textTransform: "capitalize",
    "& .MuiChip-label": {
      p: 0,
    },
  },
  ratingWrap: {
    height: "unset",
    p: "5px 10px",
    backgroundColor: "text.primary",
    color: "background.default",
    borderRadius: "4px",
    fontFamily: fonts.text,
    fontSize: fontSize.s,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "12px",
    letterSpacing: "0.25px",
    "& .MuiChip-label": {
      p: 0,
    },
    "& > svg.MuiChip-icon": {
      ml: "0px",
      mr: "6px",
    },
  },
  rating: {
    display: "inline-block",
    mr: "6px",
  },
  subRating: {
    fontWeight: 400,
    fontSize: "10px",
    color: "text.secondary",
  },
  unitName: {
    fontSize: fontSize.xl,
    minHeight: "60px",
    fontWeight: 700,
    lineHeight: "30px",
    mb: "30px",
  },
  services: {
    display: "flex",
    mb: "16px",
  },
  location: {
    display: "flex",
  },
  servicesIcon: {
    color: `${colors.text.secondary}`,
  },
  servicesIconWrap: {
    width: "20px",
    height: "20px",
  },
  servicesWrap: {
    ml: "10px",
  },
  servicesTitle: {
    fontWeight: 300,
    lineHeight: "20px",
    color: "text.secondary",
  },
  servicesList: {
    fontWeight: 300,
    lineHeight: "20px",
    color: "text.primary",
  },
  locationIcon: {
    color: `${colors.text.secondary}`,
  },
  locationIconWrap: {
    width: "20px",
    height: "20px",
  },
  locationWrap: {
    ml: "10px",
  },
  locationTitle: {
    fontWeight: 300,
    lineHeight: "20px",
    color: "text.secondary",
  },
  locationAddress: {
    fontWeight: 300,
    lineHeight: "20px",
    color: "text.primary",
  },
};
