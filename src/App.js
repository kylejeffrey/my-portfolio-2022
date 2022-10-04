import { CssBaseline } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import "./App.css";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/Skills";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: green,
    mode: "dark",
  },
  projectLanguage: {
    padding: "8px",
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
