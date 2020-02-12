import React, { createContext } from "react";
import useToggle from "../hook/useToggle";

export const ThemesContext = createContext();
export const LayoutContext = createContext();

export const ThemesProvider = props => {
  const [isDarkMode, toggleTheme, resetTheme] = useToggle(false);
  const [isGridLayout, toggleIsGridLayout, resetLayout] = useToggle(true);

  return (
    <ThemesContext.Provider value={{ isDarkMode, toggleTheme, resetTheme }}>
      <LayoutContext.Provider
        value={{ isGridLayout, toggleIsGridLayout, resetLayout }}
      >
        {props.children}
      </LayoutContext.Provider>
    </ThemesContext.Provider>
  );
};
