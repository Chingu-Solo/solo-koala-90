import React, { memo } from "react";
import FontCard from "../FontCard";
import useStyles from "./fontListStyle";

const SearchList = ({ fonts, inputValue, fontSizeValue, isListLayout }) => {
  console.log("FontList rendered");

  const classes = useStyles();

  if (!fonts) return "";
  return (
    <div className={classes.fontListContainer}>
      {fonts.map(font => (
        <FontCard
          key={font.family}
          fontFamily={font.family}
          styles={font.variants}
          inputValue={inputValue}
          fontSizeValue={fontSizeValue}
          isListLayout={isListLayout}
        />
      ))}
    </div>
  );
};

export default memo(SearchList);
