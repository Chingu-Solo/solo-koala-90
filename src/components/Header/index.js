import React, { useContext, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

import { ThemesContext } from "../../context/ThemesContext";
import { renderIcons } from "../../utils/helper";
import useStyles from "./headerStyle";

const Header = props => {
  const classes = useStyles(props);
  const { isDarkMode } = useContext(ThemesContext);
  const [sideBar, setSidebar] = useState({ right: false });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebar({ ...sideBar, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["CATALOG", "FEATURED", "ARTICLES", "ABOUT"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={index === 0 && classes.navListItemActived}>
              {renderIcons(index)}
            </ListItemIcon>
            <ListItemText
              primary={text}
              className={index === 0 && classes.navListItemActived}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar
      variant="outlined"
      className={`${classes.header} ${isDarkMode && classes.headerDark}`}
    >
      <Toolbar>
        <Typography
          variant="h6"
          className={`${classes.logo} ${isDarkMode && classes.logoDark}`}
        >
          <Link
            href="#"
            className={`${classes.logoLink} ${isDarkMode &&
              classes.logoLinkDark}`}
          >
            Google Fonts
          </Link>
        </Typography>

        <List className={classes.navList}>
          <Hidden mdUp>
            <IconButton
              aria-label="open drawer"
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon
                className={`${classes.hamburger} ${isDarkMode &&
                  classes.hamburgerDark}`}
              />
            </IconButton>
            <Drawer
              anchor="right"
              open={sideBar.right}
              onClose={toggleDrawer("right", false)}
            >
              {sideList("right")}
            </Drawer>
          </Hidden>

          <Hidden only={["xs", "sm"]}>
            <ListItem>
              <Typography variant="body1">
                <Link
                  href="#"
                  className={
                    isDarkMode
                      ? `${classes.navListItem} ${classes.navListItemActivedDark}`
                      : `${classes.navListItemActived} ${classes.navListItem}`
                  }
                >
                  CATALOG
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <Link
                  href="#"
                  className={`${classes.navListItem} ${isDarkMode &&
                    classes.navListItemDark}`}
                >
                  FEATURED
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <Link
                  href="#"
                  className={`${classes.navListItem} ${isDarkMode &&
                    classes.navListItemDark}`}
                >
                  ARTICLES
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <Link
                  href="#"
                  className={`${classes.navListItem} ${isDarkMode &&
                    classes.navListItemDark}`}
                >
                  ABOUT
                </Link>
              </Typography>
            </ListItem>
          </Hidden>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
