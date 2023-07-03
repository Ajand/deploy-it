import { DataProvider } from "../data/providers";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Golos Text",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#65CBBF",
      paper: "#493E7F",
    },
    lavendar: {
      main: "#8167FF",
      light: "#B3A8FF",
    },
    secondary: {
      main: "#F4D06F",
    },
    background: {
      default: "#241D3B",
      paper: "#28203F",
      secondary: "#443569",
    },
    error: {
      main: "#FF004F",
    },
    pink: {
      main: "#FC1E9A",
      light: "#fd8ecc",
    },
    simple: {
      main: "#F5FBEF",
      contrastText: "#000",
    },
    error: {
      main: "#e76d89",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "rgb(20 21 33 / 18%) 0px 2px 10px 0px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { borderRadius: "8px !important" },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
}

export default MyApp;
