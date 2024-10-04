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
    mb: {
      xs: "10px",
    },
    lineHeight: "61px",
    fontWeight: 500,
  },
  modalDescription: {
    textAlign: "center",
    mb: "30px",
    fontWeight: 300,
  },
  clientName: {
    fontWeight: "700",
  },
  inputReason: {
    mb: "40px",
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
    fontSize: fontSize.m,
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
    fontSize: fontSize.m,
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
