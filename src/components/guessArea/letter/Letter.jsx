import { useContext, useEffect } from "react";
import styles from "./Letter.module.css";
import { context } from "../../../App";

const Letter = ({ pRow, pCol }) => {
  const { matrix, currPos, correctWord, setDisabledLetters } =
    useContext(context);
  const letter = matrix[pRow][pCol];
  const correct = correctWord.toUpperCase()[pCol] === letter.toUpperCase();
  const almost =
    !correct &&
    letter !== " " &&
    correctWord.toUpperCase().includes(letter.toUpperCase());
  const letterState =
    currPos.currRow > pRow &&
    (correct ? "correct" : almost ? "almost" : "wrong");
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currPos.currRow]);
  return (
    <div className={`${styles.container}`} id={letterState}>
      {matrix[pRow][pCol]}
    </div>
  );
};

export default Letter;
