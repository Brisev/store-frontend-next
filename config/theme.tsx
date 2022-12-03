import { Poppins } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // main: "#5A72EF",
      main: "#03045e",
    },
    secondary: {
      main: "#ffc20e",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#2b2b2b",
      secondary: "#2b2b2b",
    },
    action: {
      // active: "#03045e",
      // inactive: "#f0ff0f",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
