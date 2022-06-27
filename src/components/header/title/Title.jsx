import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

const Title = () => {
  const [titleAni, setTitleAni] = useState(true);

  const handleClick = () => {
    setTitleAni(false);
  };

  if (!titleAni) {
    setTimeout(() => {
      setTitleAni(true);
    }, 2000);
  }

  return (
    <Link onClick={() => handleClick()} className={Styles.titleLink} to={"/"}>
      <div className={titleAni ? Styles.container : Styles.containerOnClick}>
        <h1 className={Styles.title}>
          <span className={Styles.letterB}>B</span>
          <span className={Styles.letterAN}>a</span>
          <span className={Styles.letterAN}>n</span>
          <span className={Styles.shee}>shee</span>
        </h1>
      </div>
    </Link>
  );
};

export default Title;
