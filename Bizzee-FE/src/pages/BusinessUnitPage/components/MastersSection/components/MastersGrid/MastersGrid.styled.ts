export const styles = {
  gridContainer: {
    maxHeight: "480px",
    overflowY: "auto",
    pb: "20px",
    "::-webkit-scrollbar": {
      width: "5px",
      height: "5px",
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      width: "3px",
      backgroundColor: "accents.main",
    },
    "@media (max-width: 548px )": {
      maxHeight: "590px",
    },
  },
};
