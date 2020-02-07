import React from "react";
import FontCard from "../FontCard";

import useStyles from "./fontListStyle";

const SearchList = ({ fonts, quotesValue }) => {
  const classes = useStyles();
  if (!fonts) return "";
  return (
    <div className={classes.fontListContainer}>
      {fonts.map(font => (
        <FontCard
          key={font.family}
          fontFamily={font.family}
          styles={font.variants}
          quotesValue={quotesValue}
        />
      ))}
    </div>
  );
};

export default SearchList;
