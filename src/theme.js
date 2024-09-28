import { extendTheme } from "@chakra-ui/react";

// Theme configuration with custom colors and fonts
const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    bg: {
      dark: "#2f3349",
      light: "#ffffff",
      100: "#f2f2f3",
    },
    text: {
      dark: "#cfd3ec",
      light: "#6f6b7d",
    },
    gray: {
      100: "#6f6b7d", //light gray
      200: "#b6bee3",
      300: "#424659", // dark bg icon
    },
    border: {
      dark: "#4c4e69",
      light: "#b6bee3",
    },
    purple: {
      50: "rgba(134, 146, 208, 0.1)",
      100: "#eae8fd", // light purple
      200: "#7367f0",
      300: "#3a3b64", //dark bg
    },
    green: {
      100: "#dff7e9", //light green
      200: "#28c76f", // green
      300: "#2e4b4f", // dark
    },
    cyan: {
      100: "#d9f8fc", // light mode bg
      200: "#00cfe8",

      300: "#274c62", //dark mode bg
    },
    orange: {
      50: "#f4f4f5", //light mode hover
      100: "#fff1e3",
      200: "#ff9f43",
      300: "#504448", // dark bg
    },
    blue: {
      100: "#d9f8fc",
      200: "#00cfe8",
    },
    red: {
      100: "#fce5e6",
      200: "#ea5455",
      300: "#4d384b",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: {
      // Apply custom scrollbar styles globally
      "*": {
        "&::-webkit-scrollbar": {
          width: "4px", // Width of the scrollbar
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1", // Background color for the scrollbar track
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888", // Thumb color
          borderRadius: "2px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555", // Hover color for the thumb
        },
      },
    },
  },
});

export default theme;
