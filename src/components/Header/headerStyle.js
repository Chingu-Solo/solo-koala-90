import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  header: {
    padding: "0 1rem 0 2rem",
    backgroundColor: "white"
  },
  headerDark: {
    padding: "0 1rem 0 2rem",
    backgroundColor: theme.palette.secondary.main
  },
  list: {
    width: "200px",
    paddingTop: "1.5em"
  },
  logo: {
    flexGrow: 1,
    color: theme.palette.text.secondary
  },
  logoDark: {
    flexGrow: 1,
    color: "white"
  },
  navList: {
    display: "flex",
    flexDirection: "row"
  },
  hamburgerDark: {
    color: "white"
  },
  hamburger: {
    color: "inherit"
  },
  navListItem: {
    color: theme.palette.text.secondary,
    fontSize: "0.88em",
    fontWeight: "500",
    "&:hover": {
      textDecoration: "none"
    }
  },
  navListItemDark: {
    color: "white",
    fontSize: "0.88em",
    fontWeight: "500",
    "&:hover": {
      textDecoration: "none"
    }
  },
  navListItemActived: {
    color: theme.palette.secondary.main,
    fontWeight: "700"
  },
  navListItemActivedDark: {
    color: "white",
    fontWeight: "700"
  }
}));

export default useStyles;
