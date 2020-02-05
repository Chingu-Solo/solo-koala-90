import React from "react";
import FontCard from "../FontCard";

const SearchList = ({ fonts }) => {
  // console.log(fonts);
  if (!fonts) return "";
  return (
    <div>
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
