const randomQuotes = quotesArr => {
  const text = [];
  for (let i = 0; i < 1; i++) {
    let idx = Math.floor(Math.random() * quotesArr.length);
    text.push(quotesArr[idx]);
  }
  return text;
};

export { randomQuotes };
