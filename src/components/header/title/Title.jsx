import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

const Title = () => {
  return (
    <Link className={Styles.titleLink} to={"/"}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>
          <span className={Styles.letterB}>B</span>
          <span>a</span>
          <span>n</span>
          <span className={Styles.shee}>shee</span>
        </h1>
      </div>
    </Link>
  );
};

export default Title;
