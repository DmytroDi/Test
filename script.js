const text = prompt("Enter text:");
const wordsArr = text.split(" ");

const symbolsArr = [];

for (const word of wordsArr) {
  for (const letter of word) {
    if (word.indexOf(letter) === word.lastIndexOf(letter)) {
      symbolsArr.push(letter);
      break;
    }
  }
}

for (const symbol of symbolsArr) {
  if (symbolsArr.indexOf(symbol) === symbolsArr.lastIndexOf(symbol)) {
    alert(symbol);
    break;
  }
}