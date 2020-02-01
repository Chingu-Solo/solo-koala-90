import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  header: {
    padding: "0 2rem"
  },
  logo: {
    flexGrow: 1
  },
  navList: {
    display: "flex",
    flexDirection: "row"
  },
  navListItem: {
    color: theme.palette.text.secondary,
    fontSize: "0.8em",
    fontWeight: "500",
    "&:hover": {
      textDecoration: "none"
    }
  },
  navListItemActived: {
    color: theme.palette.secondary.main
  }
}));

export default useStyles;
