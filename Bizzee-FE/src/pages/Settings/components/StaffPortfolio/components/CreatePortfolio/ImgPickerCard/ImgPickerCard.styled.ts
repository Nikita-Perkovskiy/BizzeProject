export const styles = {
  card: {
    width: "220px",
    p: "10px",
    gap: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "0.5px solid rgba(17, 17, 17, 0.40)",
  },
  drag: {
    cursor: "grab",
  },
  wrapper: {
    display: "flex",
  },
  label: {
    position: "static",
    maxWidth: "unset",
    width: "200px",
    height: "200px",
    transform: "unset",
    cursor: "pointer",
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "10px",
  },
  icon: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "accents.main",
    borderRadius: "50%",
    color: "text.primary",
  },
  text: {
    fontSize: "20px",
    fontWeight: 500,
  },
  numberInput: {
    "&.MuiInputBase-root.MuiInput-root": {
      m: 0,
    },
  },
  deleteBtn: {
    width: "30px",
    height: "30px",
    p: 0,
    position: "absolute",
    top: "10px",
    right: "10px",
    bgcolor: "rgba(255, 255, 255, 0.40)",
  },
};
