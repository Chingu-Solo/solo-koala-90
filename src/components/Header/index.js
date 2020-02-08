import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/icons/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Drawer from "@material-ui/core/Drawer";
import { ThemesContext } from "../../context/ThemesContext";
import useStyles from "./headerStyle";

const Header = props => {
  const classes = useStyles(props);
  const { isDarkMode } = useContext(ThemesContext);
  return (
    <AppBar
      variant="outlined"
      color={isDarkMode ? "secondary" : "white"}
      className={classes.header}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color={isDarkMode ? "white" : "textSecondary"}
          className={classes.logo}
        >
          Google Fonts
        </Typography>

        <List className={classes.navList}>
          <Hidden mdUp>
            <IconButton aria-label="open drawer">
              <MenuIcon
                style={{ color: `${isDarkMode ? "white" : "inherit"}` }}
              />
            </IconButton>
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
                  className={
                    isDarkMode ? classes.navListItemDark : classes.navListItem
                  }
                >
                  FEATURED
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <Link
                  href="#"
                  className={
                    isDarkMode ? classes.navListItemDark : classes.navListItem
                  }
                >
                  ARTICLES
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                <Link
                  href="#"
                  className={
                    isDarkMode ? classes.navListItemDark : classes.navListItem
                  }
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
