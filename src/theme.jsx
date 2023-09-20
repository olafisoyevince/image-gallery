import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1366px",
  "3xl": "1440px",
};

const theme = extendTheme({
  colors: {
    primary: {
      50: "#ddffe2",
      100: "#afffb7",
      200: "#7dff8b",
      300: "#4bff5e",
      400: "#1aff31",
      500: "#00e617",
      600: "#00b30f",
      700: "#008008",
      800: "#004e03",
      900: "#001c00",
    },
  },
  breakpoints,
  fonts: {
    heading: "Satoshi, sans-serif",
    body: "Satoshi, sans-serif",
    mono: "Satoshi, sans-serif",
  },
});

export default theme;
