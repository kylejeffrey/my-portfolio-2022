import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import { blue, green } from "@mui/material/colors";

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
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
