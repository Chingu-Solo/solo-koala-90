import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";

const randomQuotes = quotesArr => {
  const text = [];
  for (let i = 0; i < 1; i++) {
    let idx = Math.floor(Math.random() * quotesArr.length);
    text.push(quotesArr[idx]);
  }
  return text;
};

const renderIcons = index => {
  switch (index) {
    case 0:
      return <HomeIcon />;
    case 1:
      return <StarIcon />;
    case 2:
      return <DescriptionIcon />;
    case 3:
      return <InfoIcon />;
    default:
      return "";
  }
};

export { randomQuotes, renderIcons };
