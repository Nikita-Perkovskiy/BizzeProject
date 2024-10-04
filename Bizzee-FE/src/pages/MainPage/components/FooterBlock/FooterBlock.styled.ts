import { fontSize } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";

export const styles = {
  blockFon: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.text.primary,
  },
  blockWrapper: (isLargeScreen: boolean) => ({
    width: "100%",
    display: "flex",
    justifyContent: {
      xs: "center",
      md: "flex-start",
    },

    p: {
      xs: "200px 0px",
      md: isLargeScreen ? "150px 85px 100px 85px" : "150px 50px 100px 50px",
      lg: "200px 270px 150px 270px",
    },
    maxWidth: "1920px",
    "@media (max-width: 1023px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  }),
  mainBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1023px)": {
      flexDirection: "column",
    },
  },
  infoContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: "60px",
    alignItems: "flex-start",
    "@media (max-width: 1023px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "120px",
    },
  },
  mainInfoBox: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    gap: "100px",
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: `${colors.background.default} !important`,
    borderLeft: "1px solid",
    padding: "10px 0px 10px 30px",

    "@media (max-width: 1023px)": {
      flexDirection: "column",
      alignItems: "center",
      borderTop: "1px solid",
      borderLeft: "0px",
      padding: "20px 0px 20px 0px",
      gap: "50px",
    },
  },
  contentBoxLogo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "@media (max-width: 1023px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  contentBoxItem: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "@media (max-width: 1023px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  logoText: {
    maxWidth: "320px",
    fontWeight: "300",
    fontSize: fontSize.m,
    color: colors.text.subContent,
    lineHeight: "20px",
    textAlign: "left",
    "@media (max-width: 1023px)": {
      textAlign: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  contentWrapper: {
    height: "100%",
  },
  pageLink: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: fontSize.l,
    color: colors.background.default,
    lineHeight: "32px",
    maxWidth: "320px",
    width: "content",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#FFC904",
      opacity: 0,
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
    },
    "&:hover::after": {
      opacity: 1,
      transform: "scaleX(1)",
    },
  },
  menus: {
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    item: {
      justifyContent: "flex-start",
      "@media (max-width: 1023px)": {
        justifyContent: "center",
      },
      "&>a": {
        fontWeight: "300",
        fontSize: fontSize.m,
        color: colors.text.subContent,
        lineHeight: "20px",
        height: "20px",
        "&:hover": {
          color: colors.background.default,
          borderBottom: `1px solid ${colors.text.subContent}`,
        },
      },
    },
  },
  contentBox: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "@media (max-width: 1023px)": {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  contentItem: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: fontSize.l,
    color: colors.background.default,
    lineHeight: "32px",
    maxWidth: "320px",
    width: "100%",
  },
  iconWrapper: {
    gap: "12px",
    mt: "34px",
    "@media (max-width: 1023px)": {
      textAlign: "center",
      mt: "8px",
    },
  },
  contactsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "100px",
    alignItems: "flex-start",
    "@media (max-width: 1023px)": {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "30px",
    },
    "@media (max-width: 1340px) and (min-width: 1023px) ": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  firstGridItem: {
    "@media (max-width: 1340px)": {
      order: 2,
    },
  },
  secondGridItem: {
    "@media (max-width: 1340px)": {
      order: 1,
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "36px",
    width: "36px",
  },
};
