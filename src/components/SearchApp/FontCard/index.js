import React, { useState, useContext, memo } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextAreaAutoSize from "@material-ui/core/TextareaAutosize";
import { randomQuotes } from "../../../utils/helper";
import { quotesArr } from "../../../utils/quotes";
import { ThemesContext, LayoutContext } from "../../../context/ThemesContext";
import useStyles from "./fontCardStyle";

const FontCard = props => {
  console.log("FontCard rendered!");
  const classes = useStyles(props);
  const { isDarkMode } = useContext(ThemesContext);
  const { isGridLayout } = useContext(LayoutContext);
  const { fontFamily, styles, inputValue, fontSizeValue } = props;
  const [quotesValue] = useState(randomQuotes(quotesArr));

  return (
    <Grid
      item
      xs={12}
      md={isGridLayout ? 4 : 12}
      lg={isGridLayout ? 3 : 12}
      className={classes.fontCardContainer}
    >
      <section
        className={isDarkMode ? classes.fontSectionDark : classes.fontSection}
      >
        <div>
          <div className={classes.fontTitleIcon}>
            <h1
              className={isDarkMode ? classes.fontNameDark : classes.fontName}
            >
              {fontFamily}
            </h1>
            <IconButton size="small">
              <AddCircleIcon color="secondary" fontSize="small" />
            </IconButton>
          </div>
          <h2
            className={
              isDarkMode ? classes.fontStyleCountsDark : classes.fontStyleCounts
            }
          >
            {styles.length} styles
          </h2>
        </div>
        <div className="fontPreview">
          <TextAreaAutoSize
            defaultValue={inputValue || quotesValue}
            className={isDarkMode ? classes.textareaDark : classes.textarea}
            style={{
              fontFamily: fontFamily,
              fontSize: `${fontSizeValue}px`
            }}
          />
        </div>
      </section>
    </Grid>
  );
};

export default memo(FontCard);
