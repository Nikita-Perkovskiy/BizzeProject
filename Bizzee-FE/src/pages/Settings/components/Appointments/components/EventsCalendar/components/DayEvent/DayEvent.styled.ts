import { hexToRgba } from "utils/hexToRgba";

export const styles = {
  eventWrapper: (color: string) => {
    const currentMasterColor = hexToRgba(color, 0.1);

    return {
      pointerEvents: "auto",
      width: "100%",
      height: "100%",
      p: "10px 15px",
      flexDirection: "column",
      alignItems: "flex-start",
      backgroundColor: currentMasterColor,
      color: "text.primary",
      transition: "none",
      border: "none",
      borderRadius: "5px",
      "&:hover": {
        bgcolor: currentMasterColor,
      },
    };
  },
  selectedEvent: (isAbsent: boolean) => ({
    border: "1px solid",
    borderColor: isAbsent ? "error.main" : "accents.main",
    bgcolor: "background.default",
    p: "9px 14px",
  }),
  eventText: {
    fontSize: 14,
    textAlign: "start",
  },
  procedureName: {
    color: "text.secondary",
  },
};
