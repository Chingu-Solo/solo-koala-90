import React from "react";
import FontCard from "../FontCard";
import useStyles from "./fontListStyle";

const SearchList = ({
  fonts,
  inputValue,
  fontSizeValue,
  isListLayout,
  favFonts,
  addFavFonts,
  removeFavFonts
}) => {
  const classes = useStyles();

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
          addFavFonts={() => addFavFonts(font.family)}
          removeFavFonts={removeFavFonts}
        />
      ))}
    </div>
  );
};

export default SearchList;
