import React from "react";
import FontCard from "../FontCard";

import useStyles from "./fontListStyle";

const SearchList = ({ fonts, inputValue, fontSizeValue }) => {
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
        />
      ))}
    </div>
  );
};

export default SearchList;
