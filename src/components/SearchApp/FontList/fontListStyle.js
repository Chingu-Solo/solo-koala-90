import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  fontListContainer: {
    display: "flex",
    justifyContent: "space-start",
    maxWidth: "90%",
    margin: "0 auto",
    flexWrap: "wrap",
    marginTop: theme.spacing(3)
  }
}));

export default useStyles;
