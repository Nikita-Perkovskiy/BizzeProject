export const styles = {
  blockWrapper: {
    boxShadow: "none",
    display: "flex",
    gap: "40px",
    "@media (max-width: 1145px)": {
      flexDirection: "column-reverse",
      gap: "0px",
      maxHeight: "fit-content",
    },
    padding: "0 !important",
    maxHeight: "410px",
  },
  commentsWrapper: {
    flex: 1,
  },
};
