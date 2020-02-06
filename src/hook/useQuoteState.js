import { useState } from "react";

const useQuoteState = initalVal => {
  const [value, setValue] = useState(initalVal);
  const handleChange = e => setValue(e.target.value);

  return [value, handleChange];
};

export default useQuoteState;
