import React, { useEffect, useState } from "react";
import axios from "axios";
import useIntersect from "../../hook/useIntersect";
import useInputState from "../../hook/useInputState";
import SearchBar from "./Searchbar";
import FontList from "./FontList";
import useStyles from "./searchAppStyle";

const SearchApp = props => {
  const classes = useStyles(props);

  const [fonts, setFonts] = useState([]);
  const [observer, setNodes, enteries] = useIntersect({});
  const [inputValue, handleQuotesChange] = useInputState();
  const [filteredFonts, setFilteredFonts] = useState("");
  const [fontSizeValue, setFontSizeValue] = useState(40);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_FONTS_API}&sort=popularity`
      );
      setFonts(res.data.items.slice(0, 10));
    })();
  }, []);

  useEffect(() => {
    if (!fonts) return;
    let textarea = Array.from(document.querySelectorAll("textarea"));
    setNodes(textarea);
  }, [fonts, setFonts]);

  useEffect(() => {
    if (!enteries) return;

    enteries.forEach(entry => {
      if (!entry.isIntersecting) return;

      let lazyTextArea = entry.target;
      const fontLink = lazyTextArea.style.fontFamily.split(" ").join("+");
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css?family=${fontLink}&display=swap`;
      link.rel = "preload stylesheet";

      document.head.appendChild(link);

      observer.unobserve(lazyTextArea);
    });
  }, [enteries, observer]);

  const newFilters = fonts.filter(font =>
    font.family.toLowerCase().includes(filteredFonts.toLowerCase())
  );

  const resultCounts = fonts => (
    <div className={classes.resultCounts}>
      <p style={{ display: "inline-box", marginLeft: "0" }}>
        Viewing <span className={classes.countColor}>{newFilters.length}</span>{" "}
        of {fonts.length} font families
      </p>
      <p></p>
    </div>
  );

  console.log(fonts);

  return (
    <div>
      <SearchBar
        handleQuotesChange={handleQuotesChange}
        filteredFonts={filteredFonts}
        setFilteredFonts={setFilteredFonts}
        fontSizeValue={fontSizeValue}
        setFontSizeValue={setFontSizeValue}
      />
      {fonts ? (
        <div className={classes.displayFontResult}>
          {resultCounts(fonts)}
          <FontList
            fonts={newFilters}
            inputValue={inputValue}
            fontSizeValue={fontSizeValue}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchApp;
