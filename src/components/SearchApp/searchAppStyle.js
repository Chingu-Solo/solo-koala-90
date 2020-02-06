import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  resultCounts: {
    maxWidth: "100%",
    margin: "0 auto",
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "500",
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary
  }
}));

export default useStyles;
