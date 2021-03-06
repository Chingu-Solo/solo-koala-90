import React, { useContext, memo } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import RefreshIcon from "@material-ui/icons/Refresh";
import ViewComfyOutlinedIcon from "@material-ui/icons/ViewComfyOutlined";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import Slider from "@material-ui/core/Slider";
import Hidden from "@material-ui/core/Hidden";
import { ThemesContext, LayoutContext } from "../../../context/ThemesContext";

import useStyles from "./searchBarStyle";

const SearchBar = ({
  handleQuotesChange,
  filteredFonts,
  setFilteredFonts,
  fontSizeValue,
  setFontSizeValue,
  handleReset,
  inputValue
}) => {
  const classes = useStyles();

  const { isDarkMode, toggleTheme } = useContext(ThemesContext);
  const { isGridLayout, toggleIsGridLayout } = useContext(LayoutContext);
  const fontSelect = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];

  const handleFilter = e => setFilteredFonts(e.target.value);
  return (
    <Grid
      container
      wrap="nowrap"
      alignItems="center"
      justify="space-between"
      className={isDarkMode ? classes.searchBarDark : classes.searchBar}
    >
      <Grid item md={2} lg={2}>
        <InputBase
          value={filteredFonts}
          onChange={handleFilter}
          type="text"
          name={filteredFonts}
          placeholder="Search fonts"
          classes={{
            input: `${isDarkMode ? classes.inputInputDark : classes.inputInput}`
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon
                fontSize="small"
                color={isDarkMode ? "secondary" : "inherit"}
              />
            </InputAdornment>
          }
          className={isDarkMode ? classes.searchFontDark : classes.searchFont}
        />
      </Grid>
      <Hidden xsDown>
        <Grid
          item
          md={3}
          lg={3}
          className={isDarkMode ? classes.spacedLineDark : classes.spacedLine}
        >
          <InputBase
            value={inputValue || ""}
            name={inputValue}
            onChange={handleQuotesChange}
            color="secondary"
            placeholder="Type something"
            classes={{
              root: isDarkMode ? classes.inputRootDark : classes.inputRoot,
              focused: classes.inputFoucus,
              input: `${
                isDarkMode ? classes.inputInputDark : classes.inputInput
              }`
            }}
          />
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          className={isDarkMode ? classes.spacedLineDark : classes.spacedLine}
        >
          <div className={classes.modifyFonts}>
            <Select
              value={fontSizeValue}
              onChange={e => setFontSizeValue(e.target.value)}
              disableUnderline={true}
              classes={{
                root: isDarkMode ? classes.selectRootDark : classes.selectRoot,
                icon: classes.selectIcon
              }}
            >
              <MenuItem className={classes.hide} value={fontSizeValue}>
                {fontSizeValue} px
              </MenuItem>
              {fontSelect.map(f => (
                <MenuItem dense key={f} value={f || fontSizeValue}>
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
            <IconButton aria-label="change theme" onClick={toggleTheme}>
              <FormatColorFillIcon
                color={isDarkMode ? "secondary" : "inherit"}
              />
            </IconButton>
            <IconButton aria-label="change layout" onClick={toggleIsGridLayout}>
              {isGridLayout ? (
                <ViewComfyOutlinedIcon
                  color={isDarkMode ? "secondary" : "inherit"}
                />
              ) : (
                <ViewStreamIcon color={isDarkMode ? "secondary" : "inherit"} />
              )}
            </IconButton>
          </Hidden>
          <IconButton aria-label="reset" onClick={handleReset}>
            <RefreshIcon color={isDarkMode ? "secondary" : "inherit"} />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default memo(SearchBar);
