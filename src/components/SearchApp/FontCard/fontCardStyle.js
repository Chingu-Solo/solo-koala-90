import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  fontCardContainer: {
    maxWidth: "100%"
  },
  fontSection: {
    borderTop: "1px solid rgba(0, 0, 0, 0.22)",
    padding: "1rem 1px 3rem 1px",
    margin: "0 1em"
  },
  fontTitleIcon: {
    display: "flex",
    justifyContent: "space-between"
  },
  fontName: {
    fontFamily: "Roboto",
    fontSize: ".9em",
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.8)",
    lineHeight: theme.spacing(0.2)
  },
  fontStyleCounts: {
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "600",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  }
}));

export default useStyles;
