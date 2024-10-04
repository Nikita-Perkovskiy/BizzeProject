import {
  createStyles,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";
import { colors } from "./themeColors";
import { fontSize, fonts } from "./fonts";

export const themeColors = () =>
  createStyles({
    palette: colors,
  }) as PaletteOptions;

export const theme = () =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 360,
        md: 768,
        lg: 1920,
      },
    },
    typography: {
      h1: {
        fontFamily: fonts.title,
        fontWeight: 500,
        fontSize: fontSize.l,
        lineHeight: "170%",
        letterSpacing: 4,
        "@media (min-width:768px)": {
          fontSize: fontSize.xl,
          lineHeight: "auto",
          letterSpacing: 0,
        },
        "@media (min-width:1920px)": {
          fontSize: fontSize.xxl,
          lineHeight: "170%",
          letterSpacing: 4,
        },
      },
      h2: {
        fontFamily: fonts.text,
      },
      h3: {
        fontFamily: fonts.text,
      },
      h4: {
        fontFamily: fonts.text,
      },
      h5: {
        fontFamily: fonts.text,
      },
      h6: {
        fontFamily: fonts.text,
      },
      caption: {
        fontFamily: fonts.text,
      },
      body1: {
        fontFamily: fonts.text,
        fontWeight: 400,
        fontSize: fontSize.m,
        letterSpacing: 0,
      },
      buttonText: {
        fontFamily: fonts.text,
        fontWeight: 500,
        fontSize: fontSize.m,
        lineHeight: "1",
        letterSpacing: 0,
      },
      tagText: {
        fontFamily: fonts.text,
        fontWeight: 500,
        fontSize: fontSize.s,
        lineHeight: "1",
        letterSpacing: 0,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "0",
            borderRadius: "6px",
            fontFamily: fonts.text,
            fontWeight: 500,
            fontSize: fontSize.m,
            lineHeight: "1",
            letterSpacing: 0,
            textTransform: "none",
            border: "2px solid",
            "&.primaryYellow": {
              backgroundColor: colors.accents.main,
              borderColor: colors.accents.main,
              color: colors.text.primary,
              "&:hover": {
                backgroundColor: colors.accents.hover,
                borderColor: colors.accents.hover,
              },
              "&:focus": {
                borderColor: colors.text.primary,
                backgroundColor: colors.accents.main,
              },
              "&:active": {
                borderColor: colors.text.primary,
                backgroundColor: colors.text.primary,
                color: colors.accents.main,
              },
              "&:disabled": {
                borderColor: colors.gray.disabled,
                backgroundColor: colors.gray.disabled,
                color: colors.background.default,
              },
            },
            "&.primaryBlack": {
              backgroundColor: colors.text.primary,
              borderColor: colors.text.primary,
              color: colors.background.default,
              "&:hover": {
                backgroundColor: colors.gray.hoverFocused,
                borderColor: colors.gray.hoverFocused,
              },
              "&:focus": {
                borderColor: colors.text.primary,
                backgroundColor: colors.gray.hoverFocused,
              },
              "&:active": {
                color: colors.text.primary,
                borderColor: colors.text.primary,
                backgroundColor: colors.background.default,
              },
              "&:disabled": {
                borderColor: colors.gray.disabled,
                backgroundColor: colors.gray.disabled,
                color: colors.background.default,
              },
            },
            "&.secondary": {
              backgroundColor: colors.background.default,
              borderColor: colors.text.secondary,
              color: colors.text.primary,
              "&:hover": {
                backgroundColor: colors.accents.hover,
                borderColor: colors.text.secondary,
              },
              "&:focus": {
                borderColor: colors.text.primary,
                backgroundColor: colors.background.default,
              },
              "&:active": {
                borderColor: colors.accents.main,
                backgroundColor: colors.background.default,
              },
              "&:disabled": {
                borderColor: colors.gray.disabled,
                backgroundColor: colors.background.default,
                color: colors.gray.disabled,
              },
            },
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          disableGutters: true,
          maxWidth: false,
          sx: {
            px: {
              xs: "10px",
              md: "50px",
              lg: "250px",
            },
            pl: {
              md: "80px",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInput-root": {
              width: "100%",
              height: "50px",
              marginTop: "21px",
              padding: "10px 16px",
              border: "1px solid",
              borderColor: colors.text.secondary,
              borderRadius: "4px",
              color: colors.text.primary,
              lineHeight: "normal",
              "&.Mui-focused": {
                border: "2px solid",
                borderColor: colors.accents.main,
              },
              "&.Mui-error": {
                border: "2px solid",
                borderColor: colors.error.main,
              },
              "&.Mui-disabled": {
                borderColor: colors.gray.disabled,
                cursor: "not-allowed",
              },
            },
            "& .MuiInputLabel-root": {
              color: colors.text.primary,
              lineHeight: "normal",
              fontSize: fontSize.s,
              "&.Mui-focused": {
                color: colors.text.primary,
              },
              "&.Mui-error": {
                color: colors.error.main,
              },
              "&.Mui-disabled": {
                color: colors.gray.disabled,
              },
            },
            "& .MuiInput-input": {
              "&::placeholder": {
                color: colors.text.secondary,
              },
              "&.Mui-disabled": {
                cursor: "not-allowed",
              },
            },
            "& .MuiInput-input.Mui-disabled ": {
              color: colors.gray.disabled,
            },
            "& .MuiFormHelperText-root": {
              marginTop: "4px",
              padding: "0 16px",
              fontFamily: fonts.text,
              fontWeight: 400,
              fontSize: fontSize.xs,
              letterSpacing: 0,
              lineHeight: "normal",
              color: colors.error.main,
            },
            "& .MuiInputAdornment-root": {
              marginLeft: " 10px",
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "transparent",
            },
            "& .MuiSvgIcon-root": {
              fill: colors.text.primary,
              width: "24px",
              height: "24px",
            },
            "&.Mui-disabled .MuiSvgIcon-root": {
              fill: colors.gray.disabled,
            },
            "&.Mui-checked .MuiSvgIcon-root": {
              fill: colors.accents.main,
            },
            "&.Mui-checked:hover .MuiSvgIcon-root": {
              fill: colors.accents.hover,
            },
            "&.Mui-checked > .PrivateSwitchBase-input:focus ~ .MuiSvgIcon-root > path":
              {
                outline: "2px solid",
                outlineColor: colors.text.primary,
                borderRadius: "1px",
              },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: colors.background.default,
            "&:hover": {
              backgroundColor: colors.accents.hover,
            },
            "&.Mui-selected": {
              backgroundColor: colors.background.default,
              "&:hover": {
                backgroundColor: colors.accents.hover,
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            "&.MuiPaper-root": {
              "::-webkit-scrollbar": {
                width: "4px",
                height: "118px",
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius: "0px",
                backgroundColor: colors.text.secondary,
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: colors.background.default,
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            "&.primaryCard": {
              minWidth: "340px",
              borderRadius: "10px",
              padding: "20px",
              "@media (min-width:768px)": {
                minWidth: "380px",
                padding: "30px 20px",
              },
              "@media (min-width:1920px)": {
                minWidth: "505px",
                padding: "30px 40px",
              },
            },
          },
        },
      },
    },
  }) as ThemeOptions;
