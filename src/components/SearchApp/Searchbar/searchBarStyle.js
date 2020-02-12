import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  searchBar: {
    maxWidth: "90%",
    borderRadius: "48px",
    margin: "0 auto",
    padding: "0 0.2em",
    paddingLeft: ".8em",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    marginTop: theme.spacing(5)
  },
  searchBarDark: {
    maxWidth: "90%",
    borderRadius: "48px",
    margin: "0 auto",
    padding: "0 0.2em",
    paddingLeft: ".8em",
    opacity: ".7",
    border: `1px solid ${theme.palette.secondary.main}`,
    marginTop: theme.spacing(11)
  },
  searchIcon: {
    display: "inline-block",
    position: "relative",
    top: "5px",
    marginRight: theme.spacing(2)
  },
  selectRoot: {
    fontSize: ".9rem",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.87)",
    margin: "0 .5em"
  },
  selectRootDark: {
    fontSize: ".9rem",
    fontWeight: "500",
    color: theme.palette.secondary.main,
    margin: "0 .5em"
  },
  selectIcon: {
    color: theme.palette.secondary.main
  },
  searchFont: {
    widthL: "100%",
    [theme.breakpoints.down["md"]]: {
      width: "80%"
    }
  },
  searchFontDark: {
    widthL: "100%",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down["md"]]: {
      width: "80%"
    }
  },
  inputRoot: {
    fontSize: ".9rem",
    fontWeight: "500",
    width: "95%",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&:hover": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`
    },
    [theme.breakpoints.down["md"]]: {
      width: "80%"
    }
  },
  inputRootDark: {
    fontSize: ".9rem",
    fontWeight: "500",
    width: "95%",
    color: theme.palette.secondary.main,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&:hover": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`
    },
    [theme.breakpoints.down["md"]]: {
      width: "80%"
    }
  },
  inputFoucus: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`
  },
  inputInput: {
    "&::placeholder": {
      fontSize: ".9rem",
      fontWeight: "500",
      opacity: ".8"
    }
  },
  inputInputDark: {
    "&::placeholder": {
      fontSize: ".9rem",
      fontWeight: "500",
      color: theme.palette.secondary.main,
      opacity: ".5"
    }
  },
  modifyFonts: {
    display: "flex"
  },
  silder: {
    marginLeft: "15px"
  },
  sliderRoot: {
    width: "25%"
  },
  spacedLine: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    paddingLeft: ".7rem"
  },
  silderLine: {
    width: "100%",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    paddingRight: "2em"
  },
  spacedLineDark: {
    borderLeft: `1px solid ${theme.palette.secondary.main}`,
    paddingLeft: ".7rem"
  },
  icons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    margin: "0 auto"
  },
  hide: {
    display: "none"
  }
}));

export default useStyles;
