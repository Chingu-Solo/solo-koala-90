import React, { createContext } from "react";
import useToggle from "../hook/useToggle";

export const LayoutContext = createContext();

export const LayoutProvider = props => {
  const [isGridLayout, toggleIsGridLayout] = useToggle(true);

  return (
    <LayoutContext.Provider value={{ isGridLayout, toggleIsGridLayout }}>
      {props.children}
    </LayoutContext.Provider>
  );
};
