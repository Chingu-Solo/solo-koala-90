import React, { useEffect, useState, useContext, memo } from "react";
import axios from "axios";
import useIntersect from "../../hook/useIntersect";
import useInputState from "../../hook/useInputState";
import SearchBar from "./Searchbar";
import FontList from "./FontList";
import useStyles from "./searchAppStyle";
import { ThemesContext, LayoutContext } from "../../context/ThemesContext";
import useFavFontState from "../../hook/useFavFontState";

const SearchApp = () => {
  const classes = useStyles();
  const { isDarkMode, resetTheme } = useContext(ThemesContext);
  const { isGridLayout, resetLayout } = useContext(LayoutContext);
  const [fonts, setFonts] = useState([]);
  const [observer, setNodes, enteries] = useIntersect({});
  const [inputValue, handleQuotesChange, resetInput] = useInputState();
  const [filteredFonts, setFilteredFonts] = useState("");
  const [fontSizeValue, setFontSizeValue] = useState();
  const initalFavFonts = [];
  const { favFonts, addFavFonts, removeFavFonts } =
    useFavFontState(initalFavFonts);

  //&sort=popularity
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_FONTS_API}&sort=popularity`,
      );
      setFonts(res.data.items.slice(0, 50));
    })();
  }, []);

  useEffect(() => {
    isGridLayout ? setFontSizeValue(40) : setFontSizeValue(64);
  }, [isGridLayout]);

  useEffect(() => {
    if (!fonts) return;
    let textarea = Array.from(document.querySelectorAll("textarea"));
    setNodes(textarea);
  }, [fonts, filteredFonts, setNodes]);

  useEffect(() => {
    if (!enteries) return;

    enteries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      let lazyTextArea = entry.target;
      const fontLink = lazyTextArea.style.fontFamily.replace(/ /g, "+");
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${fontLink}&display=swap`;
      link.href = link.href.replace(/%22/g, "");
      link.rel = "stylesheet";

      document.head.appendChild(link);
      observer.unobserve(lazyTextArea);
    });
  }, [enteries, observer]);

  const newFilters = fonts.filter((font) =>
    font.family.toLowerCase().includes(filteredFonts.toLowerCase()),
  );

  const resultCounts = (fonts) => (
    <div
      className={isDarkMode ? classes.resultCountsDark : classes.resultCounts}
    >
      <p style={{ display: "inline-box", marginLeft: "0" }}>
        Viewing <span className={classes.countColor}>{newFilters.length}</span>{" "}
        of {fonts.length} font families
      </p>
    </div>
  );

  const handleReset = () => {
    resetInput("");
    setFilteredFonts("");
    setFontSizeValue(40);
    resetTheme();
    resetLayout();
  };

  return (
    <div>
      <SearchBar
        handleQuotesChange={handleQuotesChange}
        filteredFonts={filteredFonts}
        setFilteredFonts={setFilteredFonts}
        fontSizeValue={fontSizeValue}
        setFontSizeValue={setFontSizeValue}
        handleReset={handleReset}
        inputValue={inputValue}
      />
      {fonts && (
        <div className={classes.displayFontResult}>
          {resultCounts(fonts)}
          <FontList
            fonts={newFilters}
            inputValue={inputValue}
            fontSizeValue={fontSizeValue}
            favFonts={favFonts}
            addFavFonts={addFavFonts}
            removeFavFonts={removeFavFonts}
          />
        </div>
      )}
    </div>
  );
};

export default memo(SearchApp);
