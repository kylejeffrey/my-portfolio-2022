import React from "react";

import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CBF83E",
      // active: "purple",
      // main: "#FFF",
    },
    background: {
      default: "black",
    },
    mode: "dark",
    // secondary: green,
    //   kylesColors: {
    //     red: "#ff0",
    //   },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },
    // MuiButton: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       "&:hover": {
    //         filter: "blur(20px)",
    //       },
    //     }),
    //   },
    // },
  },
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
