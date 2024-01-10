import wordBank from "./wordle-bank.txt";
export const boardMatrix = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];
export const generateWordSet = async () => {
  let wordArr;
  let todaysWord;
  let wordSet;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
