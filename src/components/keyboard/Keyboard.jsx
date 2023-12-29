import { useCallback, useContext, useEffect } from "react";
import styles from "./Keyboard.module.css";
import Key from "./key/Key";
import { FaDeleteLeft } from "react-icons/fa6";
import { context } from "../../App";
const Keyboard = () => {
  const { handleKeyPressed } = useContext(context);
  const keyList1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keyList2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keyList3 = ["z", "x", "c", "v", "b", "n", "m"];

  const handleExternalKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      handleKeyPressed("ENTER", false);
    } else if (event.key === "Backspace") {
      handleKeyPressed("Del", true);
    } else {
      keyList1.forEach((key) => {
        if (event.key.toLowerCase() === key) {
          handleKeyPressed(key.toUpperCase(), false);
        }
      });
      keyList2.forEach((key) => {
        if (event.key.toLowerCase() === key) {
          handleKeyPressed(key.toUpperCase(), false);
        }
      });
      keyList3.forEach((key) => {
        if (event.key.toLowerCase() === key) {
          handleKeyPressed(key.toUpperCase(), false);
        }
      });
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleExternalKeyboard);

    return () =>
      document.removeEventListener("keydown", handleExternalKeyboard);
  });
  return (
    <div className={`${styles.conatiner}`} onKeyDown={handleExternalKeyboard}>
      <div className={`${styles.row1} ${styles.row}`}>
        {keyList1.map((currKey) => {
          return (
            <Key
              key={currKey}
              keyValue={currKey.toUpperCase()}
              isChar={true}
              isDel={false}
            />
          );
        })}
      </div>
      <div className={`${styles.row2} ${styles.row}`}>
        {keyList2.map((currKey) => {
          return (
            <Key
              key={currKey}
              keyValue={currKey.toUpperCase()}
              isChar={true}
              isDel={false}
            />
          );
        })}
      </div>
      <div className={`${styles.row3} ${styles.row}`}>
        <div className="enter-key">
          <Key keyValue={"Enter".toUpperCase()} isChar={false} isDel={false} />
        </div>
        {keyList3.map((currKey) => {
          return (
            <Key
              key={currKey}
              keyValue={currKey.toUpperCase()}
              isChar={true}
              isDel={false}
            />
          );
        })}
        <div className="delete-key">
          <Key keyValue={<FaDeleteLeft />} isChar={false} isDel={true} />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
