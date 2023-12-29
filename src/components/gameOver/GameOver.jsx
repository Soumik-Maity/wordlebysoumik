import { useContext } from "react";
import styles from "./GameOver.module.css";
import { context } from "../../App";
const GameOver = () => {
  const { correctWord, win } = useContext(context);
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.text}`}> Correct Word was : {correctWord}</p>
      {win ? (
        <p className={`${styles.text}`}>
          Congratulations ! You guessed it right
        </p>
      ) : (
        <p className={`${styles.text}`}>GAME OVER. Better Luck Next Time.</p>
      )}
    </div>
  );
};

export default GameOver;
