import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  fontListContainer: {
    display: "flex",
    width: "90vw",
    flexWrap: "wrap",
    marginTop: theme.spacing(3)
  }
}));

export default useStyles;
