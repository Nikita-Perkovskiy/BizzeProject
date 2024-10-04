export const styles = {
  titleColor: (color: string) => ({
    color,
  }),
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  titleWrapper: {
    height: "30px",
    mb: "5px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "4px",
  },
  message: {
    color: "text.secondary",
    fontSize: "16px",
  },
};
