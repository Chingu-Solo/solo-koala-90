import React, { createContext } from "react";
import useToggle from "../hook/useToggle";

export const ThemesContext = createContext();
export const LayoutContext = createContext();

export const ThemesProvider = props => {
  const [isDarkMode, toggleTheme] = useToggle(false);
  const [isGridLayout, toggleIsGridLayout] = useToggle(true);

  return (
    <ThemesContext.Provider value={{ isDarkMode, toggleTheme }}>
      <LayoutContext.Provider value={{ isGridLayout, toggleIsGridLayout }}>
        {props.children}
      </LayoutContext.Provider>
    </ThemesContext.Provider>
  );
};
