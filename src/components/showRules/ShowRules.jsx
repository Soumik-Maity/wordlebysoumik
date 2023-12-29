import { useContext } from "react";
import styles from "./ShowRules.module.css";
import { context } from "../../App";
const ShowRules = () => {
  const { setShowRules } = useContext(context);
  return (
    <>
      <div
        className={`${styles.modalWrapper}`}
        onClick={() => setShowRules(false)}
      ></div>
      <div className={`${styles.container} ${styles.modalContainer}`}>
        <h1>How to Play</h1>
        <h3>Guess the wordle in 6 tries.</h3>
        <h3>Examples:</h3>
        <br />
        <img src="./eg1.png" alt="Word with one letter marked in green" />
        <p>W is in the word and in the correct spot.</p>
        <img src="./eg2.png" alt="Word with one letter marked in green" />
        <p>I is in the word but in the wrong spot.</p>
        <img src="./eg3.png" alt="Word with one letter marked in green" />
        <p>U is not in the word in any spot.</p>
        <button onClick={() => setShowRules(false)}> Got It!</button>
      </div>
    </>
  );
};

export default ShowRules;
