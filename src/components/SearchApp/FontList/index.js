import React from "react";
import FontCard from "../FontCard";

import useStyles from "./fontListStyle";

const SearchList = ({ fonts }) => {
  const classes = useStyles();
  if (!fonts) return "";
  return (
    <div className={classes.fontListContainer}>
      {fonts.map(font => (
        <FontCard
          key={font.family}
          fontFamily={font.family}
          styles={font.variants}
        />
      ))}
    </div>
  );
};

export default SearchList;
