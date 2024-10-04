import { shadows } from "config/styles/shadows";

export const styles = {
  maxWidth: "1424px",
  width: "100%",
  boxShadow: shadows.main,
  borderRadius: "10px",
  backgroundColor: "background.default",
  p: {
    xs: "30px 20px",
    md: "30px 40px",
  },
  mb: "40px",
  mx: {
    xs: "10px",
    md: "70px",
  },
  "@media (min-width: 768px) and (max-width: 1023px)": {
    mx: "50px",
  },
  containerWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
};
