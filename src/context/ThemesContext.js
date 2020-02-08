import React, { createContext } from "react";
import useToggle from "../hook/useToggle";

export const ThemesContext = createContext();

export const ThemesProvider = props => {
  const [isDarkMode, toggleTheme] = useToggle(true);

  return (
    <ThemesContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemesContext.Provider>
  );
};
