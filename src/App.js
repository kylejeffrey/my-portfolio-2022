import "./App.css";
import { Navbar } from "./components/Navbar";
import { blue, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "#e7ebf0",
          },
        },
      ],
    },
  },
  palette: {
    primary: blue,
    secondary: green,
    mode: "light",
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
