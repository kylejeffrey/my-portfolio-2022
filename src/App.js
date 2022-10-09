import { CssBaseline } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/Skills";

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

export default function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}
