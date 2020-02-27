import uuid from "uuid/v4";
import useLocalStorageState from "./useLocalStorageState";

export default initalFonts => {
  const [favFonts, setFavFonts] = useLocalStorageState("favFonts", initalFonts);

  return {
    favFonts,
    addFavFonts: newFont => {
      setFavFonts([...favFonts, { name: newFont, id: uuid() }]);
    },
    removeFavFonts: favFontId => {
      const removedFavFonts = favFonts.filter(fav => fav.id !== favFontId);
      setFavFonts(removedFavFonts);
    }
  };
};
