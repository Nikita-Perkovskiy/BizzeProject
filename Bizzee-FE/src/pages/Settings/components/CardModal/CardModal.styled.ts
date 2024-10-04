import { fonts, fontSize } from "config/styles/fonts";
import { colors } from "config/styles/themeColors";
import { STATUS } from "pages/Settings/constants";

export const styles = {
  modalContainer: (type: string) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "100%",
      md: "540px",
      lg: "660px",
    },
    bgcolor: "background.default",
    borderRadius: "10px",
    p: {
      xs: "40px 20px",
      md: "60px 80px",
      lg: type === STATUS ? "60px 50px" : "50px 140px",
    },
  }),
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontFamily: fonts.title,
    fontSize: {
      xs: fontSize.l,
      md: fontSize.xl,
      lg: fontSize.xxl,
    },
    lineHeight: {
      xs: "31px",
      md: "41px",
      lg: "61px",
    },
    color: "text.primary",
    letterSpacing: {
      xs: "4px",
      md: "6px",
      lg: "11px",
    },
    mb: {
      xs: "10px",
      lg: "0px",
    },
    textAlign: "center",
    textTransform: "uppercase",
  },
  modalDescription: {
    fontFamily: fonts.text,
    fontSize: "16px",
    lineHeight: "23px",
    textAlign: "center",
    mb: {
      xs: "30px",
      lg: "50px",
    },
  },
  modalUserName: {
    fontWeight: "bold",
  },
  modalUserActive: {
    color: `${colors.accents.active}`,
  },
  modalUserInActive: {
    color: `${colors.error.main}`,
  },
  modalButtonsContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row-reverse",
    },
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  modalButtonLogOut: {
    width: {
      xs: "320px",
      md: "180px",
    },
    height: "50px",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 500,
    borderRadius: "6px",
    textTransform: "capitalize",
  },
  modalButtonCancel: {
    width: {
      xs: "320px",
      md: "180px",
    },
    height: "50px",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 500,
    borderRadius: "6px",
  },
  modalIconClose: {
    width: "20px",
    height: "20px",
    position: "absolute",
    top: "20px",
    right: "20px",
  },
};
