import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import "./App.css";
import Routes from "./routes";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Nunito", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
