import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  header: {
    padding: "0 1rem 0 2rem",
    backgroundColor: "white"
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
    fontSize: "0.88em",
    fontWeight: "500",
    "&:hover": {
      textDecoration: "none"
    }
  },
  navListItemActived: {
    color: theme.palette.secondary.main,
    fontWeight: "700"
  }
}));

export default useStyles;
