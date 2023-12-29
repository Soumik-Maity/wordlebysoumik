import { useContext } from "react";
import styles from "./Key.module.css";
import { context } from "../../../App";

const Key = ({ keyValue, isChar, isDel, isDisable }) => {
  const { handleKeyPressed } = useContext(context);

  const element = isChar ? (
    <div
      className={`${styles.key}`}
      id={isDisable && "disable"}
      onClick={() => handleKeyPressed(keyValue, isDel)}
    >
      {keyValue}
    </div>
  ) : (
    <div
      className={`${styles.keySpeacial}`}
      onClick={() => handleKeyPressed(keyValue, isDel)}
    >
      {keyValue}
    </div>
  );

  return element;
};

export default Key;
