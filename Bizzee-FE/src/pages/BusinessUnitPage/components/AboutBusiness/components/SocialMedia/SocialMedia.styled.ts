export const styles = {
  socialMedia: {
    position: "relative",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "text.primary",
    "& > a": {
      p: 0,
      m: 0,
      textDecoration: "none",
    },
    "& > svg": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  socialMediaWrapper: {
    display: "flex",
    gap: "30px",
  },
};
