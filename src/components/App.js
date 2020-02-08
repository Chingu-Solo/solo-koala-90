import React from "react";
import Header from "./Header";
import SearchApp from "./SearchApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ThemesProvider } from "../context/ThemesContext";
import PageContext from "../context/PageContext";
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
    <ThemesProvider>
      <ThemeProvider theme={theme}>
        <PageContext>
          <div className="App">
            <Header />
            <SearchApp />
          </div>
        </PageContext>
      </ThemeProvider>
    </ThemesProvider>
  );
}
