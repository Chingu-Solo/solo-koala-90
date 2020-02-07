import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ViewListOutlinedIcon from "@material-ui/icons/ViewListOutlined";
import ViewComfyOutlinedIcon from "@material-ui/icons/ViewComfyOutlined";
import RefreshIcon from "@material-ui/icons/Refresh";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Slider from "@material-ui/core/Slider";
import Hidden from "@material-ui/core/Hidden";

import useStyles from "./searchBarStyle";

const SearchBar = props => {
  const { handleQuotesChange, filteredFonts, setFilteredFonts } = props;
  const classes = useStyles(props);

  const handleFilter = e => setFilteredFonts(e.target.value);

  return (
    <Grid
      container
      wrap="nowrap"
      alignItems="center"
      justify="space-between"
      className={classes.searchBar}
    >
      <Grid item alignItems="center" md={2} lg={2}>
        <InputBase
          type="text"
          name={filteredFonts}
          onChange={handleFilter}
          placeholder="Search fonts"
          classes={{
            input: classes.inputInput
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
          className={classes.searchFont}
        />
      </Grid>
      <Hidden xsDown>
        <Grid item md={3} lg={3} className={classes.spacedLine}>
          <InputBase
            onChange={handleQuotesChange}
            color="secondary"
            placeholder="Type something"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              focused: classes.inputFoucus
            }}
          />
        </Grid>
        <Grid item md={4} lg={4} className={classes.spacedLine}>
          <div className={classes.modifyFonts}>
            <Select
              value="10"
              onChange=""
              disableUnderline={true}
              classes={{
                root: classes.selectRoot,
                icon: classes.selectIcon
              }}
            >
              <MenuItem value={10}>10px</MenuItem>
              <MenuItem value={20}>20px</MenuItem>
              <MenuItem value={30}>30px</MenuItem>
            </Select>
            <Hidden smDown>
              <div className={classes.silderLine}>
                <Slider
                  color="secondary"
                  value="25"
                  min="0"
                  max="100"
                  defaultValue=""
                  aria-labelledby="continuous-slider"
                  className={classes.silder}
                />
              </div>
            </Hidden>
          </div>
        </Grid>
      </Hidden>
      <Grid item md={2} lg={2}>
        <div className={classes.icons}>
          <Hidden xsDown>
            <IconButton aria-label="change theme">
              <FormatColorFillIcon />
            </IconButton>
            <IconButton aria-label="change layout">
              <ViewListOutlinedIcon />
            </IconButton>
          </Hidden>
          <IconButton aria-label="reset">
            <RefreshIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
