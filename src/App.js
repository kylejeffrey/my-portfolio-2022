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
import { Contact } from "./components/contact/contact";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/Skills";
// require("dotenv").config();

const theme = createTheme({
  palette: {
    mode: "dark",
    //   primary: {
    //     main: blue,
    //   },
    //   secondary: green,
    //   kylesColors: {
    //     red: "#ff0",
    //   },
  },
  // projectLanguage: {
  //   padding: "8px",
  //   margin: "24px",
  // },
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
        <Contact />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
