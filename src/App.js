import "./App.css";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
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
    mode: "dark",
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Projects />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
