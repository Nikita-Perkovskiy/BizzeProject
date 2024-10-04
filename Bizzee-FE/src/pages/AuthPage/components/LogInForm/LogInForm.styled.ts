export const styles = {
  formWrapperStyles: {
    height: "100%",
    width: 340,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    padding: {
      md: "37px 0px 75px",
      lg: "90px 0px 0px",
    },
  },
  inputPartWrapperStyles: {
    width: "320px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  buttonBlockWrapperStyles: {
    width: "320px",
    marginTop: "auto",
  },
  linkWrapperStyles: {
    alignSelf: "flex-start",
    margin: 0,
    padding: 0,
    color: "link.main",
    textDecoration: "underline",
  },
  notificationWrapper: {
    p: "0 16px",
  },
  notificationText: {
    color: "error.main",
    fontSize: "12px",
  },
  singUpStyles: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "23px",
    color: "text.primary",
    textAlign: "center",
    "& > a": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      color: "link.main",
      textDecoration: "underline",
    },
  },
  buttonWrapperStyles: {
    marginTop: "45px",
  },
  submitBtn: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "26.06px",
    width: "320px",
    height: "50px",
  },
  inputWrapperStyles: {
    width: "320px",
    ".MuiOutlinedInput-root": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      color: "text.primary",
    },
    "&.Mui-error": {
      borderColor: "error.main",
    },
    ".MuiInputLabel-root": {
      transform: "scale(1)",
    },
    "& input[type='password']": {
      fontFamily: "sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
};
