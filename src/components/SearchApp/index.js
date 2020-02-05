import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./Searchbar";
import fontList from "./FontList";

function SearchApp() {
  const [fonts, setFonts] = useState();

  const fetchData = async () => {
    const res = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_FONTS_API}`
    );
    setFonts(res.data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(fonts);

  return (
    <div>
      <SearchBar />
      <Grid container>
        {fonts ? (
          <div>
            <p>
              Viewing {fonts.length} of {fonts.length}
            </p>
          </div>
        ) : (
          ""
        )}
        <fontList fonts={fonts} />
      </Grid>
    </div>
  );
}

export default SearchApp;
