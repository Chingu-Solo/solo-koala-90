import React, { useState, useContext } from "react";
import uuid from "uuid/v4";
import FontCard from "../FontCard";
import useStyles from "./fontListStyle";

const SearchList = ({ fonts, inputValue, fontSizeValue, isListLayout }) => {
  console.log("FontList rendered");

  const classes = useStyles();
  const [favFonts, setFavFonts] = useState([
    // { name: "Roboto", id: 1 },
    // { name: "Abel", id: 2 }
  ]);

  const handleAddFavFont = newFont => {
    setFavFonts([...favFonts, { name: newFont, id: uuid(), added: true }]);
  };

  const handleDeleteFavFont = name => {
    const removedFavFonts = favFonts.filter(fav => fav.name !== name);
    setFavFonts(removedFavFonts);
  };

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
          favFonts={favFonts}
          handleAddFavFont={() => handleAddFavFont(font.family)}
          handleDeleteFavFont={handleDeleteFavFont}
        />
      ))}
    </div>
  );
};

export default SearchList;
