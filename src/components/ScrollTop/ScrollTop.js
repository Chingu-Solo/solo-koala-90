import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import useStyles from "./scrollTopStyle";

const ScrollTop = ({ children }) => {
  const classes = useStyles();

  // const { children } = props;
  const trigger = useScrollTrigger();

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  console.log(window);
  return (
    <Hidden smDown>
      <Zoom in={trigger}>
        <div
          onClick={handleClick}
          role="presentation"
          className={classes.root}
          style={{ visibility: "visible", transform: "1" }}
        >
          {children}
        </div>
      </Zoom>
    </Hidden>
  );
};

export default ScrollTop;
