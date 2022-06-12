import { useState } from "react";
import Styles from "./buttonTwo.module.css";

const ButtonTwo = () => {
  const [activate, setActivate] = useState(true);

  if (!activate) {
    setTimeout(() => {
      setActivate(true);
    }, 4000);
  }
  return (
    <div className={activate ? Styles.container : Styles.constainerAni}>
      <button
        onClick={() => setActivate(!activate)}
        className={activate ? Styles.button : Styles.buttonAni}
      >
        CLICK ME
      </button>
    </div>
  );
};

export default ButtonTwo;
