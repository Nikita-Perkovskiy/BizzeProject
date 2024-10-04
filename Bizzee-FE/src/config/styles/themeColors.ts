export const colors = {
  text: {
    primary: "#2D2D2D",
    secondary: "#8A8A8A",
    tags: "#AC5B00",
    subContent: "#AAAAAA",
    white: "#FFFFFF",
  },
  link: {
    main: "#1976D2",
    visited: "#8A3FFC",
  },
  accents: {
    main: "#FFC904",
    hover: "#FFECA7",
    active: "#12B76A",
  },
  background: {
    default: "#FFFFFF",
    open: "#CEE981",
    closed: "#E98781",
    tags: "#FFF7DB",
  },
  gray: {
    hoverFocused: "#6E6E6E",
    disabled: "#B9B9B9",
    dividers: "#11111166",
    secondary: "#D7D7D766",
    tagDisabled: "#F4F4F4",
    timeSlot: "#F8F8F8",
    hoverItem: "#333333",
  },
  green: {
    default: "#CEE981",
  },
  error: {
    main: "#B3261E",
    absent: "#FE0F0F",
  },
  success: {
    main: "#049134",
  },
  scroll: {
    background: "#E8E8E8",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    accents: {
      main: string;
      hover: string;
      active: string;
    };
    link: {
      main: string;
      visited: string;
    };
    gray: {
      hoverFocused: string;
      disabled: string;
      dividers: string;
      tagDisabled: string;
      timeSlot: string;
    };
    scroll: {
      background: string;
    };
  }

  interface PaletteOptions {
    accents?: {
      main?: string;
      hover?: string;
      active?: string;
    };
    link?: {
      main?: string;
      visited?: string;
    };
    gray?: {
      hoverFocused?: string;
      disabled?: string;
      dividers?: string;
      tagDisabled?: string;
      timeSlot?: string;
    };
    scroll?: {
      background?: string;
    };
  }
}
