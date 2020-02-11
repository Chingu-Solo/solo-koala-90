import React, { useState, useContext, memo } from "react";
import uuid from "uuid/v4";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextAreaAutoSize from "@material-ui/core/TextareaAutosize";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FontDownloadOutlinedIcon from "@material-ui/icons/FontDownloadOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { randomQuotes } from "../../../utils/helper";
import { quotesArr } from "../../../utils/quotes";
import { ThemesContext, LayoutContext } from "../../../context/ThemesContext";
import useStyles from "./fontCardStyle";

const FontCard = ({ fontFamily, styles, inputValue, fontSizeValue }) => {
  const classes = useStyles();
  const { isDarkMode } = useContext(ThemesContext);
  const { isGridLayout } = useContext(LayoutContext);
  const [quotesValue] = useState(randomQuotes(quotesArr));
  const [drawer, setDrawer] = useState({ bottom: false });
  const [favFonts, setFavFonts] = useState([
    { name: "Roboto", id: 1 },
    { name: "Abel", id: 2 }
  ]);

  console.log("FontCard rendered!");

  const toggleDrawer = (side, open) => e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;

    setDrawer({ ...drawer, [side]: open });
  };

  const fontItemsList = side => (
    <div role="presentation" onKeyDown={toggleDrawer(side, false)}>
      <List>
        {favFonts &&
          favFonts.map(favFont => (
            <ListItem key={favFont.id} dense>
              <ListItemIcon>
                <FontDownloadOutlinedIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={favFont.name} />
              <IconButton>
                <HighlightOffIcon color="secondary" />
              </IconButton>
            </ListItem>
          ))}
      </List>
    </div>
  );

  console.log(favFonts);

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
            <IconButton
              size="small"
              aria-label="Add fonts"
              onClick={toggleDrawer("bottom", true)}
            >
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
      <Drawer
        anchor="bottom"
        open={drawer.bottom}
        onClose={toggleDrawer("bottom", false)}
        classes={{
          paperAnchorBottom: classes.drawerStyle
        }}
      >
        {fontItemsList("bottom")}
      </Drawer>
    </Grid>
  );
};

export default memo(FontCard);
