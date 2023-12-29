import { useContext } from "react";
import styles from "./Letter.module.css";
import { context } from "../../../App";

const Letter = ({ pRow, pCol }) => {
  const { matrix, currPos, correctWord } = useContext(context);
  const letter = matrix[pRow][pCol];
  const correct = correctWord.toUpperCase()[pCol] === letter.toUpperCase();
  // console.log(correctWord.toUpperCase()[currPos.currCol]);
  const almost =
    !correct &&
    letter !== " " &&
    correctWord.toUpperCase().includes(letter.toUpperCase());
  const letterState =
    currPos.currRow > pRow &&
    (correct ? "correct" : almost ? "almost" : "wrong");
  return (
    <div className={`${styles.container}`} id={letterState}>
      {matrix[pRow][pCol]}
    </div>
  );
};

export default Letter;
