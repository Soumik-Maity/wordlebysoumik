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
  let wordSet;
  let todaysWord;
  let wordArr;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
