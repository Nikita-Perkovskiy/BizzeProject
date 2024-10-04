export const styles = {
  resourceWrapper: (color: string) => ({
    width: "100%",
    px: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    "&:before": {
      content: "''",
      display: "inline-flex",
      width: "20px",
      minWidth: "20px",
      maxWidth: "20px",
      height: "20px",
      bgcolor: color,
      borderRadius: "50%",
    },
  }),
  masterText: {
    display: "inline-block",
    fontWeight: 700,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
