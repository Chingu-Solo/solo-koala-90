import React, { useState, useContext, memo } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Textarea from "react-expanding-textarea";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FontDownloadOutlinedIcon from "@material-ui/icons/FontDownloadOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Drawer from "@material-ui/core/Drawer";
import { randomQuotes } from "../../../utils/helper";
import { quotesArr } from "../../../utils/quotes";
import { ThemesContext, LayoutContext } from "../../../context/ThemesContext";
import useStyles from "./fontCardStyle";

const FontCard = ({
  fontFamily,
  styles,
  inputValue,
  fontSizeValue,
  favFonts,
  addFavFonts,
  removeFavFonts
}) => {
  const classes = useStyles();
  const { isDarkMode } = useContext(ThemesContext);
  const { isGridLayout } = useContext(LayoutContext);
  const [quotesValue] = useState(randomQuotes(quotesArr));
  const [isAdded, setIsAdded] = useState(false);
  const [drawer, setDrawer] = useState({ bottom: false });

  const handleAddFont = e => {
    addFavFonts();
    setIsAdded(true);
  };

  const handleRemove = name => {
    removeFavFonts(name);
    setIsAdded(false);
  };

  const toggleDrawer = (side, open) => e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;

    setDrawer({ ...drawer, [side]: open });
  };

  const fontItemsList = side => (
    <div role="presentation" onKeyDown={toggleDrawer(side, false)}>
      <List>
        {favFonts &&
          favFonts.map(favFont => (
            <div key={favFont.name}>
              <ListItem dense>
                <ListItemIcon>
                  <FontDownloadOutlinedIcon
                    color="secondary"
                    fontSize="small"
                  />
                </ListItemIcon>
                <ListItemText primary={favFont.name} />
                <IconButton onClick={() => handleRemove(favFont.name)}>
                  <HighlightOffIcon color="secondary" />
                </IconButton>
              </ListItem>
            </div>
          ))}
      </List>
    </div>
  );

  // console.log(favFonts);

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
            <span onClick={toggleDrawer("bottom", true)}>
              <IconButton
                size="small"
                aria-label="Add fonts"
                onClick={handleAddFont}
              >
                <AddCircleIcon
                  color={isAdded ? "disabled" : "secondary"}
                  fontSize="small"
                />
              </IconButton>
            </span>
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
          <Textarea
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
