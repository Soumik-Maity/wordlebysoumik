import styles from "./GuessArea.module.css";
import Letter from "./letter/Letter";

import { useContext } from "react";
import { context } from "../../App";
const GuessArea = () => {
  const { matrix, setMatrix } = useContext(context);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.row1} ${styles.row}`}>
        <Letter pRow={0} pCol={0} />
        <Letter pRow={0} pCol={1} />
        <Letter pRow={0} pCol={2} />
        <Letter pRow={0} pCol={3} />
        <Letter pRow={0} pCol={4} />
      </div>
      <div className={`${styles.row2} ${styles.row}`}>
        <Letter pRow={1} pCol={0} />
        <Letter pRow={1} pCol={1} />
        <Letter pRow={1} pCol={2} />
        <Letter pRow={1} pCol={3} />
        <Letter pRow={1} pCol={4} />
      </div>
      <div className={`${styles.row3} ${styles.row}`}>
        <Letter pRow={2} pCol={0} />
        <Letter pRow={2} pCol={1} />
        <Letter pRow={2} pCol={2} />
        <Letter pRow={2} pCol={3} />
        <Letter pRow={2} pCol={4} />
      </div>
      <div className={`${styles.row4} ${styles.row}`}>
        <Letter pRow={3} pCol={0} />
        <Letter pRow={3} pCol={1} />
        <Letter pRow={3} pCol={2} />
        <Letter pRow={3} pCol={3} />
        <Letter pRow={3} pCol={4} />
      </div>
      <div className={`${styles.row5} ${styles.row}`}>
        <Letter pRow={4} pCol={0} />
        <Letter pRow={4} pCol={1} />
        <Letter pRow={4} pCol={2} />
        <Letter pRow={4} pCol={3} />
        <Letter pRow={4} pCol={4} />
      </div>
      <div className={`${styles.row6} ${styles.row}`}>
        <Letter pRow={5} pCol={0} />
        <Letter pRow={5} pCol={1} />
        <Letter pRow={5} pCol={2} />
        <Letter pRow={5} pCol={3} />
        <Letter pRow={5} pCol={4} />
      </div>
    </div>
  );
};

export default GuessArea;
