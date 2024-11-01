import Subscription from "./components/Subscription";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    mode: "dark",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Subscription />
    </ThemeProvider>
  );
};

export default App;
