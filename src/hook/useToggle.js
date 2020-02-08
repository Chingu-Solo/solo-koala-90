import { useState } from "react";

export default (initalVal = false) => {
  const [state, setState] = useState(initalVal);
  const toggle = () => setState(!state);
  return [state, toggle];
};
