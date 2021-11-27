// import uuid from "uuid/v4";
import useLocalStorageState from "./useLocalStorageState";

export default initalFonts => {
  const [favFonts, setFavFonts] = useLocalStorageState("favFonts", initalFonts);

  return {
    favFonts,
    addFavFonts: newFont => {
      const seenfonts = new Set(favFonts.map(f => f.name));
      const unique = seenfonts.has(newFont);
      if (!unique) setFavFonts([...favFonts, { name: newFont }]);
    },
    removeFavFonts: fontName => {
      const removedFavFonts = favFonts.filter(fav => fav.name !== fontName);
      setFavFonts(removedFavFonts);
    }
  };
};
