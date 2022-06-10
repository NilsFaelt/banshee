import { useState } from "react";
import Styles from "./buttonOne.module.css";

const ButtonOne = () => {
  const [activate, setActivate] = useState(true);
  if (!activate) {
    setTimeout(() => {
      setActivate(true);
    }, 6000);
  }

  return (
    <div className={activate ? Styles.container : Styles.containerAnimation}>
      <button
        onClick={() => setActivate(!activate)}
        className={activate ? Styles.button : Styles.buttonAni}
      >
        CLICK ME
      </button>
    </div>
  );
};

export default ButtonOne;
