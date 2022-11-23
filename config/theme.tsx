import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#5A72EF",
    },
    secondary: {
      main: "#ffc20e",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
