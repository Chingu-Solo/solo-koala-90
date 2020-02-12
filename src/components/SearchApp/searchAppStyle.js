import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  displayFontResult: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  resultCounts: {
    width: "85vw",
    marginLeft: theme.spacing(0),
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "600",
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary
  },
  resultCountsDark: {
    width: "85vw",
    marginLeft: theme.spacing(0),
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "600",
    marginTop: theme.spacing(3),
    color: theme.palette.secondary.main
  },
  countColor: {
    color: theme.palette.secondary.main
  }
}));

export default useStyles;
