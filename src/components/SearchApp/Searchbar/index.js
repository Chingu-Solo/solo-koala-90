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
  const {
    handleQuotesChange,
    filteredFonts,
    setFilteredFonts,
    fontSizeValue,
    setFontSizeValue
  } = props;
  const classes = useStyles(props);
  const fontSelect = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];

  const handleFilter = e => setFilteredFonts(e.target.value);

  return (
    <Grid
      container
      wrap="nowrap"
      alignItems="center"
      justify="space-between"
      className={classes.searchBar}
    >
      <Grid item md={2} lg={2}>
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
              value={fontSizeValue}
              onChange={e => setFontSizeValue(e.target.value)}
              disableUnderline={true}
              classes={{
                root: classes.selectRoot,
                icon: classes.selectIcon
              }}
            >
              <MenuItem className={classes.hide} value={fontSizeValue}>
                {fontSizeValue} px
              </MenuItem>
              {fontSelect.map(f => (
                <MenuItem key={f} value={f || fontSizeValue}>
                  {f} px
                </MenuItem>
              ))}
            </Select>
            <Hidden smDown>
              <div className={classes.silderLine}>
                <Slider
                  color="secondary"
                  value={fontSizeValue}
                  min={8}
                  max={300}
                  defaultValue={40}
                  aria-labelledby="continuous-slider"
                  className={classes.silder}
                  onChange={(e, newValue) => setFontSizeValue(newValue)}
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
