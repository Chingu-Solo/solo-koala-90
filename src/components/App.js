import React from "react";
import Header from "./Header";
import SearchApp from "./SearchApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ThemesProvider } from "../context/ThemesContext";
import PageContext from "../context/PageContext";
import "./app.css";

import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./ScrollTop/ScrollTop";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff5252"
    }
  }
});

export default function App(props) {
  return (
    <ThemesProvider>
      <ThemeProvider theme={theme}>
        <PageContext>
          <div className="App">
            <Toolbar id="back-to-top-anchor" />
            <Header />
            <SearchApp />
            <ScrollTop {...props}>
              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </div>
        </PageContext>
      </ThemeProvider>
    </ThemesProvider>
  );
}
