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
  fontSectionDark: {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
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
  fontNameDark: {
    fontFamily: "Roboto",
    fontSize: ".9em",
    fontWeight: "700",
    color: theme.palette.secondary.main,
    lineHeight: theme.spacing(0.2)
  },
  fontStyleCounts: {
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "600",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  },
  fontStyleCountsDark: {
    fontFamily: "Roboto",
    fontSize: ".8rem",
    fontWeight: "600",
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2)
  },
  textarea: {
    marginTop: ".8em",
    fontWeight: "regular",
    width: "100%",
    border: "none",
    outline: "0",
    resize: "none",
    lineHeight: "1.2",
    letterSpacing: "1",
    color: "#212121"
  },
  textareaDark: {
    marginTop: ".8em",
    fontWeight: "regular",
    width: "100%",
    border: "none",
    outline: "0",
    resize: "none",
    lineHeight: "1.2",
    letterSpacing: "1",
    color: theme.palette.secondary.main,
    backgroundColor: "transparent"
  },
  drawerStyle: {
    background: "transparent",
    color: "white",
    left: "auto",
    backgroundColor: "black",
    right: theme.spacing(5),
    width: "40vw",
    [theme.breakpoints.up("lg")]: {
      width: "30vw",
      right: theme.spacing(5)
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      right: 0
    }
  }
}));

export default useStyles;
