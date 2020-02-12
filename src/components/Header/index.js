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
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";

import { ThemesContext } from "../../context/ThemesContext";
import useStyles from "./headerStyle";

const Header = props => {
  const classes = useStyles(props);
  const { isDarkMode } = useContext(ThemesContext);
  const [sideBar, setSidebar] = useState({ right: false });

  const renderIcons = index => {
    switch (index) {
      case 0:
        return <HomeIcon className={classes.navListItemActived} />;
      case 1:
        return <StarIcon />;
      case 2:
        return <DescriptionIcon />;
      case 3:
        return <InfoIcon />;
      default:
        return "";
    }
  };

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
        {["Catalog", "Featured", "Articles", "About"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{renderIcons(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        variant="outlined"
        className={isDarkMode ? classes.headerDark : classes.header}
      >
        <Toolbar>
          <Typography
            variant="h6"
            className={isDarkMode ? classes.logoDark : classes.logo}
          >
            Google Fonts
          </Typography>

          <List className={classes.navList}>
            <Hidden mdUp>
              <IconButton
                aria-label="open drawer"
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon
                  className={
                    isDarkMode ? classes.hamburgerDark : classes.hamburger
                  }
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
    </>
  );
};

export default Header;
