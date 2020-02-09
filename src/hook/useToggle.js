import { useState } from "react";

export default (initalVal = false) => {
  const [state, setState] = useState(initalVal);
  const toggle = () => setState(!state);
  const reset = () => setState(initalVal);
  return [state, toggle, reset];
};
