import { useContext } from "react";
import styles from "./Navbar.module.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import { context } from "../../App";
const Navbar = () => {
  const { setShowRules } = useContext(context);
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.logo} child`}>
        <img src="./wordle.png" alt="Company Logo" />
      </div>
      <div className={`${styles.heading} child`}>Wordle</div>
      <div
        className={`${styles.rules} child`}
        onClick={() => setShowRules(true)}
      >
        <FaRegQuestionCircle />
      </div>
    </div>
  );
};

export default Navbar;
