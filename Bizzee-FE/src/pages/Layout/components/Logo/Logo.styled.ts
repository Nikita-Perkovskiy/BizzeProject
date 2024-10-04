import { SxProps, Theme } from "@mui/material";

interface ILogoStyles {
  [key: string]: SxProps<Theme>;
}

export const styles: ILogoStyles = {
  logoWrapperStyles: {
    height: "100%",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    "& a": {
      color: "text.primary",
      lineHeight: "1",
    },
    "& svg": {
      color: "text.primary",
      width: {
        lg: "245px",
      },
      height: {
        lg: "64px",
      },
    },
  },
};
