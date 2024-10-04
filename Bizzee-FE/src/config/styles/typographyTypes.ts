declare module "@mui/material/styles" {
  interface TypographyVariants {
    buttonText: React.CSSProperties;
    tagText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonText?: React.CSSProperties;
    tagText?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonText: true;
    tagText: true;
  }
}

export {};
