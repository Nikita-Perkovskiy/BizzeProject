export const styles = {
  wrapperBlock: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "30px",
    p: "30px 40px",
    borderRadius: "10px",
    backgroundColor: "text.primary",
    color: "background.default",
    height: "410px",
    mb: "40px",
  },
  wrapperComment: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  wrapperButtons: {
    display: "flex",
    gap: "10px",
  },
  footerComment: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  author: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainTitle: {
    whiteSpace: "wrap",

    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "30.12px",
  },
  procedure: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    color: "gray.disabled",
  },
  commentBlock: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    gap: "10px",
  },
  commentText: {
    maxHeight: "80px",
    lineHeight: "20.12px",
    fontSize: "15px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
  },
  dataComment: {
    color: "gray.disabled",
  },
  chevronLeft: {
    height: "30px",
    p: "5px",
    transform: "rotate(90deg) scale(1.3)",
  },
  chevronRight: {
    height: "30px",
    p: "5px",
    transform: "rotate(270deg) scale(1.3)",
  },
};
