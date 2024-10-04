export const styles = {
  tableWrapper: {
    width: "100%",
    minWidth: "100%",
    whiteSpace: "nowrap",
    fontSize: "15px",
  },
  textField: {
    width: "100%",
  },
  tableLabel: {
    fontWeight: 600,
  },
  tableCell: {
    fontWeight: 600,
    "&.active": {
      color: "accents.main",
    },
    "& svg": {
      color: "accents.main",
    },
  },
  tableDivider: {
    marginTop: "30px",
  },
  searchWrapper: {
    marginTop: {
      sm: "20px",
      lg: "30px",
    },
  },
  clientErrorMessage: {
    color: "text.secondary",
    textAlign: "center",
    fontSize: "16px",
    margin: "80px 0 30px 0",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  clientErrorMessageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
  },
  clientEmail: {
    color: "text.secondary",
    fontWeight: 400,
    marginTop: "5px",
  },
  clientWrapper: {
    padding: "20px 10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  clientRank: {
    backgroundColor: "accents.main",
    borderRadius: "30px",
    padding: "5px 8px",
  },
  clientStatus: {
    padding: "5px 8px",
    backgroundColor: "green.default",
    borderRadius: "30px",
  },
};
