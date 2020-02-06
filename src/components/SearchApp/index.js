import React, { useEffect, useState } from "react";
import axios from "axios";
import useIntersect from "../../hook/useIntersect";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./Searchbar";
import FontList from "./FontList";
import useStyles from "./searchAppStyle";

const SearchApp = props => {
  const classes = useStyles(props);

  const [fonts, setFonts] = useState();
  const [observer, setNodes, enteries] = useIntersect({});

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
      link.rel = "stylesheet";

      document.head.appendChild(link);

      observer.unobserve(lazyTextArea);
    });
  }, [enteries, observer]);

  // console.log(fonts);
  const resultCounts = fonts => (
    <Grid item xs={10} className={classes.resultCounts}>
      <p>
        Viewing {fonts.length} of {fonts.length}
      </p>
    </Grid>
  );

  return (
    <div>
      <SearchBar />
      {fonts ? (
        <Grid container justify="space-between">
          {resultCounts(fonts)}
          <FontList fonts={fonts} />
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchApp;
