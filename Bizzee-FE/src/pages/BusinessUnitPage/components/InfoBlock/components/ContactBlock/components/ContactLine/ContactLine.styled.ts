import { colors } from "config/styles/themeColors";

export const styles = {
  infoIcon: {
    color: colors.text.secondary,
    mt: "2px",
    width: "18px",
    height: "30px",
  },
  contactInfo: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    "& > p": {
      fontWeight: 300,
    },
  },
  link: {
    textDecoration: `underline solid ${colors.link.main}`,
    "& > p": {
      fontWeight: 300,
    },
  },
};
