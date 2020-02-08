import React, { useContext } from "react";
import { ThemesContext } from "./ThemesContext";

const PageContext = props => {
  const { isDarkMode } = useContext(ThemesContext);

  const styles = {
    backgroundColor: `${isDarkMode ? "black" : "white"}`,
    overflowX: "hidden",
    height: "100vh",
    width: "100vw"
  };

  return <div style={styles}>{props.children}</div>;
};

export default PageContext;
