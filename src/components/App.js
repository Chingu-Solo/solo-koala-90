import React from "react";
import Header from "./Header";
import SearchApp from "./SearchApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./app.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff5252"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <SearchApp />
      </div>
    </ThemeProvider>
  );
}
