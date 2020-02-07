import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextAreaAutoSize from "@material-ui/core/TextareaAutosize";
import { randomQuotes } from "../../../utils/helper";
import { quotesArr } from "../../../utils/quotes";
import useStyles from "./fontCardStyle";

const FontCard = props => {
  const classes = useStyles(props);
  const { fontFamily, styles, quotesValue } = props;
  const [value, setValue] = useState(randomQuotes(quotesArr));

  const valueCondition = quotesValue => (!quotesValue ? value : quotesValue);

  return (
    <Grid item xs={12} md={4} lg={3} className={classes.fontCardContainer}>
      <section className={classes.fontSection}>
        <div className={classes.fontTitle}>
          <div className={classes.fontTitleIcon}>
            <h1 className={classes.fontName}>{fontFamily}</h1>
            <IconButton size="small">
              <AddCircleIcon color="secondary" fontSize="small" />
            </IconButton>
          </div>
          <h2 className={classes.fontStyleCounts}>{styles.length} styles</h2>
        </div>
        <div className="fontPreview">
          <TextAreaAutoSize
            defaultValue={value}
            value={valueCondition(quotesValue)}
            style={{
              fontFamily: fontFamily,
              marginTop: ".8em",
              fontWeight: "regular",
              fontSize: "40px",
              width: "100%",
              border: "none",
              outline: 0,
              resize: "none",
              lineHeight: "1.2",
              letterSpacing: "1",
              color: "#212121"
            }}
          />
        </div>
      </section>
    </Grid>
  );
};

export default FontCard;
