export const styles = {
  width: "100%",
  height: "100%",
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  textButton: {
    flex: 1,
    textAlign: "center",
  },
  arrowContainer: {
    position: "absolute",
    top: "0px",
    right: "-30px",
    overflow: "hidden",
    width: "25px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: (isHovered: boolean) => ({
    opacity: isHovered ? 1 : 0,
    transition: "transform 0.3s ease-in-out",
    transform: isHovered ? "translateX(0px)" : "translateX(-10px)",
  }),
};
