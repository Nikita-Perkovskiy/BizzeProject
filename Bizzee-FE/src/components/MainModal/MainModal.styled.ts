import { fontSize } from "config/styles/fonts";

export const styles = {
  modalContent: {
    width: {
      md: "380px",
      lg: "570px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    lineHeight: {
      xs: "31px",
      md: "41px",
      lg: "61px",
    },
    fontWeight: 700,
    fontSize: {
      xs: fontSize.l,
      md: fontSize.xl,
      lg: fontSize.xxl,
    },
    textTransform: "uppercase",
    letterSpacing: {
      xs: "4px",
      md: "6px",
      lg: "8px",
    },
  },
  modalDescription: {
    mb: "30px",
    fontWeight: 300,
  },
  modalButtonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      md: "row",
    },
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  actionButton: {
    width: "100%",
    maxWidth: {
      xs: "320px",
      md: "180px",
    },
    height: "50px",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 500,
    textTransform: "capitalize",
    borderRadius: "6px",
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
    position: "absolute",
    top: 8,
    right: 8,
  },
};
