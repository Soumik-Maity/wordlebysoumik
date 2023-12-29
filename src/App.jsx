import "./App.css";
import Keyboard from "./components/keyboard/Keyboard";
import GuessArea from "./components/guessArea/GuessArea";
import Navbar from "./components/navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { boardMatrix, generateWordSet } from "./boardMatrix";
import GameOver from "./components/gameOver/GameOver";
import ShowRules from "./components/showRules/ShowRules";
export const context = createContext();
function App() {
  const [matrix, setMatrix] = useState(boardMatrix);
  const [currPos, setCurrPos] = useState({ currRow: 0, currCol: 0 });
  const [listOfWords, setListOfWords] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");

  const [win, setWin] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const { currRow, currCol } = currPos;

  useEffect(() => {
    generateWordSet().then(({ wordSet, todaysWord }) => {
      setListOfWords(wordSet);
      setCorrectWord(todaysWord);
    });
  }, []);

  const handleKeyPressed = (keyValue, isDel) => {
    if (keyValue === "ENTER") {
      console.log(correctWord);
      if (currCol !== 5) {
        return;
      }

      const predictedWord =
        matrix[currRow][0] +
        matrix[currRow][1] +
        matrix[currRow][2] +
        matrix[currRow][3] +
        matrix[currRow][4];
      if (predictedWord.toUpperCase() + "\r" === correctWord.toUpperCase()) {
        setIsGameOver(true);
        setWin(true);
        const newPos = { currRow: currRow + 1, currCol: 0 };
        setCurrPos(newPos);
        //The last two line is written so that once the correct word is guessed, The position moves to next line and allows the green color to fill.
      }
      if (
        listOfWords.has(predictedWord.toLowerCase()) ||
        listOfWords.has(predictedWord.toLowerCase() + "\r")
      ) {
        const newPos = { currRow: currRow + 1, currCol: 0 };
        setCurrPos(newPos);
      } else {
        alert("Word not found");
        return;
      }
      if (currRow === 5) {
        setIsGameOver(true);
      }
    } else if (isDel === true) {
      if (currCol === 0) {
        return;
      }
      const newMatrix = [...matrix];
      newMatrix[currRow][currCol - 1] = " ";
      setMatrix(newMatrix);
      const newPos = { ...currPos, currCol: currCol - 1 };
      setCurrPos(newPos);
    } else {
      if (currCol > 4) {
        return;
      }
      const newMatrix = [...matrix];
      newMatrix[currRow][currCol] = keyValue;
      setMatrix(newMatrix);
      const newPos = { ...currPos, currCol: currCol + 1 };
      setCurrPos(newPos);
    }
  };

  return (
    <context.Provider
      value={{
        matrix,
        setMatrix,
        correctWord,
        currPos,
        setCurrPos,
        handleKeyPressed,
        win,
        setShowRules,
      }}
    >
      <Navbar />
      {showRules && <ShowRules />}
      <GuessArea />
      {isGameOver && <GameOver />}
      <Keyboard />
    </context.Provider>
  );
}

export default App;
