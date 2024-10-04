export const styles = {
  cardsContainer: {
    pb: "20px",
    mb: "30px",
    overflowX: "auto",
    display: "flex",
    "::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
      borderRadius: "4px",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "accents.main",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "scroll.background",
    },
  },
  cardDndWrapper: {
    marginRight: "15px",
  },
};
