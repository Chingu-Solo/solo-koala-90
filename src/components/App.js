import React, { memo } from "react";
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
import ScrollTop from "./ScrollTop/";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff5252"
    }
  }
});

const App = props => {
  return (
    <div className="App">
      <ThemesProvider>
        <ThemeProvider theme={theme}>
          <PageContext>
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
          </PageContext>
        </ThemeProvider>
      </ThemesProvider>
    </div>
  );
};

export default memo(App);
